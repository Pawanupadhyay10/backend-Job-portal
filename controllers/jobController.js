const job = require("../model/Jobs");

// Get All jobs
const job_all = async (req, res) => {
    try {
        const jobs = await job.find();
        res.json(jobs);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single jobs
const job_details = async (req, res) => {
    try {
        const job = await job.findById(req.params.jobId);
        res.json(job);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New job
const job_create = async (req, res) => {
    const job = new job({
        title: req.body.title,
      username: req.body.username,
        image: req.body.image,
        details: req.body.details
      });
    
      try {
        const savedjob = await job.save();
        res.send(savedjob);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update job
const job_update = async (req, res) => {
    try {
        const job = {
          title: req.body.title,
          username: req.body.username,
          image: req.body.image,
          details: req.body.details
        };
    
        const updatedjob = await job.findByIdAndUpdate(
          { _id: req.params.jobId },
          job
        );
        res.json(updatedjob);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete job
const job_delete = async (req, res) => {
    try {
        const removejob = await job.findByIdAndDelete(req.params.jobId);
        res.json(removejob);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    job_all, 
    job_details, 
    job_create, 
    job_update, 
    job_delete
  }