import PyPDF2
import pytesseract
import pdf2image

pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

# Ouvrir le fichier PDF
pdf_file = open('ressources/docs/STATUT/ALSTOM APTIS - Statuts mis à jour.pdf', 'rb')
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
if not siren:
    pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'
    siren = pytesseract.image_to_string('ressources/docs/STATUT/ALSTOM APTIS - Statuts mis à jour.pdf', lang='fra', config='--psm 6')
    pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'
    siren = siren.replace(' ', '').replace('\n', '').replace('\r', '')

# Afficher le numéro SIREN
print(siren)