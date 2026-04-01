<?php
session_start();
include("../config/db.php");

if(isset($_POST['submit'])){

$title = $_POST['title'];
$salary = $_POST['salary'];
$skills = $_POST['skills'];
$location = $_POST['location'];
$employer_id = $_SESSION['employer_id'];

$sql = "INSERT INTO jobs (employer_id,title,salary,skills,location)
VALUES (?,?,?,?,?)";

$stmt = $pdo->prepare($sql);
$stmt->execute([$employer_id,$title,$salary,$skills,$location]);

header("Location: dashboard.php");
}
?>

<h2>Create Job</h2>

<form method="POST" onsubmit="return validateForm()">

Title
<input type="text" name="title" required>

Salary
<input type="text" name="salary" required>

Skills
<input type="text" name="skills" required>

Location
<input type="text" name="location" required>

<button type="submit" name="submit">Post Job</button>

</form>