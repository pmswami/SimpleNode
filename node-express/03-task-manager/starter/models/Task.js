const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    required: [true, "must provide a name"],
    trim: true, // trims any trailing/starting whitespaces
    maxlength: [20, "name cannot be more than 20 characters"], // name length condition
  },
  completed: {
    type: Boolean,
    default: false, // provides default value
  },
});
module.exports = mongoose.model("Task", TaskSchema);
