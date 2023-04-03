<?php

$login=isset($_POST["username"])? $_POST["username"]:"";
$mdp=isset($_POST["password"])? $_POST["password"]:"";
$resultat="";
$nb="";
$data="";
$IDCLIENT="";
$Distribution="";
$Nom="";
$Prenom="";





        //BDD------------------------------\
        $database = "spirica";
        $db_handle = mysqli_connect('localhost', 'root', '' );
        $db_found = mysqli_select_db($db_handle, $database);

        if ($db_found){
                $sql = "SELECT COUNT(*) FROM client WHERE Identifiant='"."$login"."' AND mdp='"."$mdp"."'";
                $result=mysqli_query($db_handle,$sql);
                while($data=mysqli_fetch_assoc($result)){
                        $nb=$data['COUNT(*)'];
                }

                $sql= "SELECT * FROM Client WHERE Identifiant='"."$login"."' AND mdp='"."$mdp"."'";
                $resultat =mysqli_query($db_handle,$sql);
                while($data = mysqli_fetch_assoc($resultat)){
                        $IDCLIENT=$data['IDClient'];
                        $Distribution=$data['entreprisedistri'];
                        $Nom=$data['Nom'];
                        $Prenom=$data['Prenom'];
                }

                if($nb==1){
                        session_start();
                        $_SESSION['Distribution']=$Distribution;
                        $_SESSION['Id']=$IDCLIENT;
                        $_SESSION['login']=$login;
                        $_SESSION['password'] =$mdp;
                        $_SESSION['nom']=$Nom;
                        $_SESSION['prenom']=$Prenom;
                        $_SESSION['time']=time();
                        if (isset($_SESSION['Id'])&& (isset($_SESSION['prenom']))){
                        header('location: HomeClient.php');}
                        else 
                            echo ('error');
                }

                else {
                        header('location: Accueil.html');
                }

        }



                ?>