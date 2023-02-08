<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes">
    <title>Espace personnel</title>
    <link rel="icon" type="image/png" sizes="16x16" href="img/LOGO_OMNESSANTE.png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="HomeClient.css" media="screen" type="text/css" />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
</head>
<header>
    <div class="topnav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <img id="iconeheader" class="logo" src="ressources/img/SPIRICA_logo.png">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="HomeClient.html">Accueil<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active"><a class="nav-link" href="">Aide</a></li>
                <li class="nav-item active"><a class="nav-link" href=""><font color="E7501E">Nous contacter</font></a></li>
                <li class="nav-item active"><a class="nav-link" href="">Se déconnecter</a></li>
              </ul>
            </div>
          </nav>
      </div>
</header>
<body>
    <div id="info">
        <center><p id="text1">Mon espace personnel</p></center>
    </div>
    <div>
    <?php session_start();
    if(!isset($_SESSION['Id'])){
			echo "No session detected!";
			return;
			}
      else{
        $contenu='<p id="text2"><FONT face=Didot>Bonjour '.$_SESSION['nom'].' '.$_SESSION['prenom'].' !</p></FONT>';
        echo($contenu);
      }?>
    </div>
    <div id="container1">
      <div class="rounded border border-primary-subtle">
        <center><img src="ressources/img/Folder2B1.png" id="Menu1"></center>
        <button class="btn" type="button" href="">Mes dossiers</button>
      </div>
      <div class="rounded border border-primary-subtle" id="Menu2">
        <center><img src="ressources/img/Folder1B1.png"></center>
        <button class="btn" type="button" href="">Nouveau dossier</button>
      </div>
      <div class="rounded border border-primary-subtle" id="Menu3">
        <center><img src="ressources/img/MessagesB1.png"></center>
        <button class="btn" type="button" href="">Mes échanges</button>
      </div>
    </div>
    
</body>
