const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    // res.send("all items from the file");
    res.status(201).json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    // res.send("create task");
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) return res.status(404).json({ msg: "no task with given ID" });
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) return res.status(404).json({ msg: "no task with given ID" });
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const data = req.body;
    const task = await Task.findOneAndUpdate({ _id: taskId }, data, {
      new: true,
      runValidators: true,
    });
    if (!task) return res.status(404).json({ msg: "no task with given ID" });
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const editTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const data = req.body;
    const task = await Task.findOneAndUpdate({ _id: taskId }, data, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!task) return res.status(404).json({ msg: "no task with given ID" });
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
