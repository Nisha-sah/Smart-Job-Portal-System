<?php
include("../config/db.php");

$employer_id = $_SESSION['employer_id'];

$stmt = $pdo->prepare("SELECT * FROM jobs WHERE employer_id=?");
$stmt->execute([$employer_id]);
$jobs = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<h2>Employer Dashboard</h2>

<a href="create_job.php">Post New Job</a>

<table>

<tr>
<th>Title</th>
<th>Salary</th>
<th>Skills</th>
<th>Location</th>
<th>Actions</th>
</tr>

<?php foreach($jobs as $job){ ?>

<tr>
<td><?= $job['title'] ?></td>
<td><?= $job['salary'] ?></td>
<td><?= $job['skills'] ?></td>
<td><?= $job['location'] ?></td>

<td>
<a href="edit_job.php?id=<?= $job['id'] ?>">Edit</a>
<a href="delete_job.php?id=<?= $job['id'] ?>">Delete</a>
</td>

</tr>

<?php } ?>

</table>