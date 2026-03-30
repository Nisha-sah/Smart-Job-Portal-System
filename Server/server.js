const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/jobportal")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

// Job Model
const jobSchema = new mongoose.Schema({
    title: String,
    salary: Number,
    skills: [String],
    location: String
});
const Job = mongoose.model("Job", jobSchema);

// Routes
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// Create Job
app.post("/jobs", async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Jobs
app.get("/jobs", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000 🚀"));