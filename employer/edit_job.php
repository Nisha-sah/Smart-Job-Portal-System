<?php
include("../config/db.php");

$id = $_GET['id'];
$employer_id = $_SESSION['employer_id'];

$stmt = $pdo->prepare("SELECT * FROM jobs WHERE id=? AND employer_id=?");
$stmt->execute([$id,$employer_id]);
$job = $stmt->fetch();

if(isset($_POST['update'])){

$title = $_POST['title'];
$salary = $_POST['salary'];
$skills = $_POST['skills'];
$location = $_POST['location'];

$update = $pdo->prepare("UPDATE jobs SET title=?,salary=?,skills=?,location=? WHERE id=? AND employer_id=?");

$update->execute([$title,$salary,$skills,$location,$id,$employer_id]);

header("Location: dashboard.php");
}
?>

<h2>Edit Job</h2>

<form method="POST">

<input type="text" name="title" value="<?= $job['title'] ?>" required>

<input type="text" name="salary" value="<?= $job['salary'] ?>" required>

<input type="text" name="skills" value="<?= $job['skills'] ?>" required>

<input type="text" name="location" value="<?= $job['location'] ?>" required>

<button name="update">Update Job</button>

</form>