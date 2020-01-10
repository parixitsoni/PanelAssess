<?php
   $rest_json = file_get_contents("php://input");
   $_POST = json_decode($rest_json, true);
     $servername = "localhost";
     $username = "root";
     $password = "";
     $dbname = "panelassess";
   $db = new mysqli($servername, $username, $password, $dbname);
if(!$db) die("database connection error");
?>
