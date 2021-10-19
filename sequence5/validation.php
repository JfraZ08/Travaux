<?php 
if(isset($_POST))
{
//var_dump($_POST); //debug
    if(empty($_POST['prenom'])){
       
        $erreurs['prenom'] = 'veuillez entrer un prénom';
    }

    if(empty($_POST['email']))
    {
        $erreurs['email'] = 'Veuillez entrer un email';
    }elseif(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        $erreurs['email'] = 'Veuillez entrer une email valide';
    }

    if (isset($erreurs)) {
        echo json_encode($erreurs);
    } else {
        //Tout va bien, on peut sauvegarder les données
        echo json_encode(true); //Tout va bien
    } 


}
?>