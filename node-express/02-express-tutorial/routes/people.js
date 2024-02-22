const express = require("express");
const router = express.Router();
let { people } = require("../data");
const {
  getPeople,
  postPeople,
  postPostman,
  putPeople,
  deletePeople,
} = require("../controllers/people");

// router.get("/", getPeople);

// router.post("/", postPeople);

// router.post("/postman", postPostman);

// router.put("/:id", putPeople);

// router.delete("/:id", deletePeople);

router.route("/").get(getPeople).post(postPeople);
router.route("/postman").post(postPostman);
router.route("/:id").put(putPeople).delete(deletePeople);

module.exports = router;
