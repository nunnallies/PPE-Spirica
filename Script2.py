import PyPDF2
import pytesseract
from pdf2image import convert_from_path
import requests
import csv

def ExtractSiren(pdf_path):

    # Ouvrir le fichier PDF
    pdf_file = open(pdf_path, 'rb')
    pdf_reader = PyPDF2.PdfReader(pdf_file)

    pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

    # Extraire le texte du PDF
    pdf_page_count = len(pdf_reader.pages)
    text = ''
    for page in range(pdf_page_count):
        page_obj = pdf_reader.pages[page]
        text += page_obj.extract_text()

    # Chercher le numéro SIREN
    siren = ''
    for line in text.split('\n'):
        if 'SIREN' in line:
            siren = line.split('SIREN')[1].strip().replace(' ', '')

    # OCR sur l'image pour extraire le numéro SIREN s'il n'a pas été trouvé

    info=''
    if not siren:

        pages = convert_from_path(pdf_path, dpi=300, first_page=1, last_page=pdf_page_count)
        i=0
        while 'SIREN' not in siren and i < pdf_page_count:



                image = pages[i]
                pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'
                siren = pytesseract.image_to_string(image, lang='fra', config='--psm 6')
                if 'SIREN' in siren :
                    index = siren.index('SIREN')
                    info = siren[index + 7:index +20]

                else :
                    print(siren)
                    print('Le mot SIREN n\'a pas été trouvé dans l\'image')
                    siren=''

                pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'
                info= info.replace(' ', '').replace('\n', '').replace('\r', '')
                i+=1


    # Afficher le numéro SIREN
    print('Le numéro SIREN est: '+info+"\n")
    return info

def ExtractDegreDeConfiance(siren):
    url="https://api.pappers.fr/v1/entreprise?siren=" + siren
    response = requests.get(url, headers={'Authorization': 'Bearer d4781f9492f83a0b516df66d81abb38406aa10132cd12b6a'})

    formatted_response = response.json()
    code_naf = formatted_response["code_naf"]

    with open("ressources/docs/Copie de Matrice NAF-FATCA 2014.csv", 'r') as f:

        # Créer un objet csv à partir du fichier
        obj = csv.reader(f, delimiter=';')

        for ligne in obj:
            if code_naf in ligne:
                return(ligne[3])


def SiegeInFrance(objet_social_path):
    contenu_statut = convert_from_path(objet_social_path, dpi=300)
    texte = ''
    i = 0
    # Chercher l'adresse dans le PDF
    objet = "Objet non trouvé."
    while ('Siège social' not in texte) and i < len(contenu_statut):
        image = contenu_statut[i]
        pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'
        texte = pytesseract.image_to_string(image, lang='fra', config='--psm 6')
        print(texte)
        if 'Siège social' in texte:
            indexsiege = texte.index('Siège social')
            indexfin = texte.find("\n", indexsiege)
            adresse = texte[indexsiege + 15:indexfin]
            url = f"https://api-adresse.data.gouv.fr/search/?q={adresse}&page=1&per_page=1"
            response = requests.get(url)

            if response.status_code == 200:
                # Récupération des données de la réponse
                data = response.json()

                # Vérification qu'une adresse est bien trouvée
                if len(data["features"]) > 0:
                    return True
                else:
                    return False

            else:
                raise Exception("Erreur lors de la requête à l'API : {}".format(response.status_code))

        else:
            print('Le siège de ne se trouve pas sur cette page.')
            return False
        i += 1





