<?php
$serverhost = "localhost";
$dbusername = "root";
$dbpsswrd = "";
$dbname = "angazz";
$connect =  mysqli_connect($serverhost , $dbusername , $dbpsswrd , $dbname);
if(!$connect){
    die("failed ".mysqli_connect_error());
    header("location: liun.li");
};
