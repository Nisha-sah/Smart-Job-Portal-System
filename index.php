<?php
include("config/db.php");
include("includes/header.php");

// Fetch latest 5 jobs
$stmt = $pdo->query("SELECT * FROM jobs ORDER BY created_at DESC LIMIT 5");
$jobs = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Fetch stats
$total_jobs = $pdo->query("SELECT COUNT(*) FROM jobs")->fetchColumn();
$total_employers = 1200; // example static
$total_applications = 15000; // example static
?>

<section class="hero">
    <h1>Find Your Dream Job Today!</h1>
    <p>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
    <form class="job-search">
        <input type="text" placeholder="Job Title or Company">
        <select>
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="Texas">Texas</option>
        </select>
        <select>
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
        </select>
        <button>Search Job</button>
    </form>

    <div class="stats">
        <div><h3><?= $total_jobs ?></h3><p>Jobs</p></div>
        <div><h3><?= $total_applications ?></h3><p>Applications</p></div>
        <div><h3><?= $total_employers ?></h3><p>Companies</p></div>
    </div>
</section>

<section class="recent-jobs">
    <h2>Recent Jobs Available</h2>
    <a href="#" class="view-all">View all</a>
    <div class="job-list">
        <?php foreach($jobs as $job): ?>
        <div class="job-card">
            <h3><?= $job['title'] ?></h3>
            <p><?= $job['skills'] ?> | <?= $job['location'] ?> | <?= $job['salary'] ?></p>
            <a href="#" class="btn-details">Job Details</a>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<?php include("includes/footer.php"); ?>