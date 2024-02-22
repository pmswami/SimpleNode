let { people } = require("../data");
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};
const postPeople = (req, res) => {
  const { name } = req.body;
  if (name) return res.status(201).json({ success: true, person: name });
  else
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
};

const putPeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name);
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  if (!person) {
    return res.status(404).json({ success: false, msg: "no person with ID" });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePeople = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  if (!person) {
    return res.status(404).json({ success: false, msg: "no person with ID" });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ success: true, data: newPeople });
};

const postPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res
    .status(201)
    .json({ success: true, person: [...people, { name: name, id: 10 }] });
};

module.exports = {
  getPeople,
  postPeople,
  postPostman,
  putPeople,
  deletePeople,
};
