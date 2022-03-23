const router = require("express").Router();
let User = require("../models/users");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(`error: ${err}`));
});

module.exports = router;
