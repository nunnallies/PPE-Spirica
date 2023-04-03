from flask import Flask, render_template, request

app = Flask(_name_)

# fonction pour servir l'interface HTML
@app.route('/')
def index():
    return render_template('index.html')

# route pour recevoir les données de l'utilisateur
@app.route('/traitement', methods=['POST'])
def traitement():
    nom = request.form['nom']
    prenom = request.form['prenom']
    
    # Effectuer les actions souhaitées
    resultat = 'Bonjour ' + prenom + ' ' + nom + '!'

    return render_template('resultat.html', resultat=resultat)

if _name_ == '_main_':
    app.run()