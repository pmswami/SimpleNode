const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(201).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No Task found with ID ${taskId}`, 404));
    const error = new Error("Not Found");
    error.status = 400;
    return next(error);
    // return res.status(404).json({ msg: "no task with given ID" });
  }
  res.status(201).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  // console.log(task);
  if (!task)
    return next(createCustomError(`No Task found with ID ${taskId}`, 404));
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const data = req.body;
  const task = await Task.findOneAndUpdate({ _id: taskId }, data, {
    new: true,
    runValidators: true,
  });
  if (!task)
    return next(createCustomError(`No Task found with ID ${taskId}`, 404));
  res.status(201).json({ task });
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const data = req.body;
  const task = await Task.findOneAndUpdate({ _id: taskId }, data, {
    new: true,
    runValidators: true,
    overwrite: true,
  });
  if (!task)
    return next(createCustomError(`No Task found with ID ${taskId}`, 404));
  res.status(201).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
