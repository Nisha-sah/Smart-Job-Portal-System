<?php
// Database connection
$host = 'localhost';
$dbname = 'jobapplication';
$username = 'root';
$password = '';

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

 echo "Database connect sucessfylly"; 

} catch (PDOException $e) {
  die("Database connection failed: " . $e->getMessage());
}
?>