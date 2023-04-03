import requests
import json
import csv



response=requests.get("https://api.pappers.fr/v1/entreprise?siren=542065479", headers = {'Authorization' : 'Bearer d4781f9492f83a0b516df66d81abb38406aa10132cd12b6a'})


formatted_response = response.json()
code_naf = formatted_response["code_naf"]



with open("ressources/docs/Copie de Matrice NAF-FATCA 2014.csv", 'r') as f:

        # Créer un objet csv à partir du fichier
        obj = csv.reader(f,delimiter=';')

        for ligne in obj:
            if code_naf in ligne :
                print(ligne[3])
                print(ligne)

