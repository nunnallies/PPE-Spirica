import PyPDF2
import pytesseract
from pdf2image import convert_from_path



pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

pdf_path = 'ressources/docs/STATUT/ALSTOM APTIS - Statuts mis à jour.pdf'
# Ouvrir le fichier PDF
pdf_file = open(pdf_path, 'rb')
pdf_reader = PyPDF2.PdfReader(pdf_file)

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
