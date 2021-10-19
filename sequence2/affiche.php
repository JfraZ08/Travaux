<?php
//affiche.php
//connexion base de données
$db = new PDO('mysql:host=localhost;dbanme=mmi19c07','mmi19c07','JfraZ@111100@');
//récupération des variables get

//requête
$req = 'SELECT * FROM (SELECT * FROM `tchat` ORDER BY `tchat`.`id` DESC LIMIT 10) AS table_virtuelle ORDER BY id ASC';
echo $req;
$resultats = $db->query($req);

while($unmessage = $resultats->fetch()){
    echo $unmessage['pseudo'].' > '. $unmessage['message'].'<br>';
}

?>