const router = require("express").Router();
let Feed = require("../models/feeds");
let User = require("../models/users");

router.route("/").post((req, res) => {
  Feed.create(req.body)
    .then((feed) => {
      return User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { feeds: feed._id } },
        { new: true }
      );
    })
    .then((user) =>
      !user
        ? res
            .status(404)
            .json({ message: "feed added, but no users with this id" })
        : res.json({ message: "feed added" })
    )
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
