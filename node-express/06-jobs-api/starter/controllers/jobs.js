const { StatusCodes } = require("http-status-codes");
const Job = require("../models/Job");

const getAllJobs = async (req, res) => {
  // res.send("Get all jobs");
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ count: jobs.length, jobs });
};

const getJob = async (req, res) => {
  res.send("get a single job");
};

const createJob = async (req, res) => {
  // res.send("Create a job");
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json(job);
  // res.json(req.user);
};

const updateJob = async (req, res) => {
  res.send("Update an existing job");
};

const deleteJob = async (req, res) => {
  res.send("Delete an existing job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
