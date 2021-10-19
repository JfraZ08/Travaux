<?php
//Dire.php
//connexion en local
$db = new PDO('mysql:host=localhost;dbanme=mmi19c07','mmi19c07','JfraZ@111100@');
//récupération des variables get 
/*$pseudo = $_GET['pseudo'];
$message = $_GET['message'];*/

$req = 'INSERT INTO chat("pseudo","message") VALUES ("'.$pseudo.'","'.$message.'");';

$db->query($req);

if(!empty($pseudo) && !empty($message)) {
    $db->query($req);
}else {
    
}
?>