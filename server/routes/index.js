const router = require("express").Router();
const addfeedRouter = require("./addfeed");
const feedRouter = require("./feed");
const signupRouter = require("./signup");

router.use("/addfeed", addfeedRouter);
router.use("/feed", feedRouter);
router.use("/signup", signupRouter);

router.use((req, res) => {
  return res.send("Wrong route!");
});

module.exports = router;
