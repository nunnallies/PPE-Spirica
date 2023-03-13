import PyPDF2

pdf_file = open('ressources/docs/Copie de Matrice NAF-FATCA 2014.pdf', 'rb')



pdf_reader = PyPDF2.PdfReader(pdf_file)
pdf_page_count = len(pdf_reader.pages)
print(pdf_page_count)

text = ''
for page in range(pdf_page_count):
    page_obj = pdf_reader.pages[page]
    text += page_obj.extract_text()

print(text)
"""siren = ''
# Chercher le numéro SIREN
for line in text.split('\n'):
    if 'SIREN' in line:
        siren = line.split('SIREN')[1].strip().replace(' ', '')"""

