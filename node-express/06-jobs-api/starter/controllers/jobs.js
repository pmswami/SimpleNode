const getAllJobs = async (req, res) => {
  res.send("Get all jobs");
};

const getJob = async (req, res) => {
  res.send("get a single job");
};

const createJob = async (req, res) => {
  res.send("Create a job");
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
