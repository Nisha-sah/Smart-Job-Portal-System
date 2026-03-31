<?php
include("../config/db.php");

$id = $_GET['id'];
$employer_id = $_SESSION['employer_id'];

$stmt = $pdo->prepare("DELETE FROM jobs WHERE id=? AND employer_id=?");
$stmt->execute([$id,$employer_id]);

header("Location: dashboard.php");
?>