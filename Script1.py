import PyPDF2
import pytesseract
from pdf2image import convert_from_path
import cv2


"""pdf_path = 'ressources/docs/Copie de Matrice NAF-FATCA 2014.pdf'
# Ouvrir le fichier PDF
pdf_file = open(pdf_path, 'rb')
pdf_reader = PyPDF2.PdfReader(pdf_file)

# Extraire le texte du PDF
pdf_page_count = len(pdf_reader.pages)
text = ''

# Chercher le numéro SIREN
siren = ''

# OCR sur l'image pour extraire le numéro SIREN s'il n'a pas été trouvé

info = ''


pages = convert_from_path(pdf_path, dpi=300, first_page=1, last_page=pdf_page_count)
i = 0
while 'SIREN' not in siren and i < pdf_page_count:

        image = pages[i]
        pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'
        siren = pytesseract.image_to_string(image, lang='fra', config='--psm 6')
        if 'SIREN' in siren:
            index = siren.index('SIREN')
            info = siren[index + 7:index + 20]

        else:
            print(siren)
            print('Le mot SIREN n\'a pas été trouvé dans l\'image')
            siren = ''

        pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'
        info = info.replace(' ', '').replace('\n', '').replace('\r', '')
        print(siren)
        i += 1

# Afficher le numéro SIREN
print('Le numéro SIREN est: ' + info + "\n")
return info"""

objet_social_path='ressources/docs/BILAN/EDF PEI EDF PRODUCTION ELECTRIQUE INSULAIRE SAS - sociaux.pdf'

#Convertir en image le PDF
contenu_statut=convert_from_path(objet_social_path,dpi=200)
texte=''
i=0


while   i<len(contenu_statut):
        image=contenu_statut[i]
        """image = cv2.imread(contenu_statut[i])

        # Convertir en niveaux de gris
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        # Augmenter le contraste
        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
        cl1 = clahe.apply(gray)

        # Appliquer un filtre de netteté
        kernel = np.array([[-1, -1, -1], [-1, 9, -1], [-1, -1, -1]])
        sharp = cv2.filter2D(cl1, -1, kernel)"""
        pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'
        texte=pytesseract.image_to_string(image, lang='fra', config='--psm 6 --oem 1')
        print(texte)
        i += 1
"""url = f"https://api-adresse.data.gouv.fr/search/?q={adresse}&page=1&per_page=1"
response = requests.get(url)

if response.status_code == 200:
    # Récupération des données de la réponse
    data = response.json()

    # Vérification si l'adresse est en France
    if len(data["features"]) > 0 :
        print('oui')
    else:
        print('non')

else:
    raise Exception("Erreur lors de la requête à l'API : {}".format(response.status_code))"""






"""pattern =r"(\d+\s[A-Za-z]+\s[A-Za-z]+[^\n]*)
                match = re.search(pattern, texte)
                if match:
                        objet_start = match.end()
                        objet_end = texte.find("Article", objet_start)
                        objet = texte[objet_start:objet_end]

                else:
                        objet = Objet non trouvé.
        elif 'ARTICLE' in texte :
                pattern = r"(\d+\s[A-Za-z]+\s[A-Za-z]+[^\n]*)"
                match = re.search(pattern, texte)
                if match:
                        objet_start = match.end()
                        objet_end = texte.find(ARTICLE, objet_start)
                        objet = texte[objet_start:objet_end]

                else:
                        objet = "Objet non trouvé."""






""""pdf_file = open(code_naf_path, 'rb')
pdf_reader = PyPDF2.PdfReader(pdf_file)

# Extraire le texte de la MATRICR NAF
pdf_page_count = len(pdf_reader.pages)
matrice_naf = ''
for page in range(pdf_page_count):
        page_obj = pdf_reader.pages[page]
        matrice_naf+= page_obj.extract_text()

lignes_matrice_naf = []
for ligne in matrice_naf.split("NFFE\n"):
    lignes_matrice_naf.extend(ligne.split("\n"))


max_lignes=len(lignes_matrice_naf)

for line in lignes_matrice_naf:
        print(line+'\n')
        print('\n')
ressemblance = [0]*max_lignes

i=0
for line in lignes_matrice_naf :
        for word in line.split():
                if ('Expected' in line) or  ('FFI' in line) or ('Exempt' in line ) :
                        if word != ' ':
                                if word in objet :
                                        ressemblance[i]+=1
        i+=1

#On cherche la ligne avec le plus de ressemblance

max=ressemblance[0]

for i in range(len(ressemblance)):
        if ressemblance[i]>max :
                max=ressemblance[i]
                indice_max=i
        i+=1

#On affiche la ligne avec le plus de ressemblance
print(ressemblance)
print(indice_max)
print('\n')
print(ressemblance[indice_max])
print('\n')
most_similar_line=lignes_matrice_naf[indice_max]

# Afficher la ligne la plus cohérente
print("La ligne la plus cohérente est :", most_similar_line)"""














