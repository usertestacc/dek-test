const express = require("express");
require("./routes.swagger.js");
const {
  getUserProfileandRepos,
  getLikes,
  likeProfile,
} = require("../Controllers/user.controller");
const { ensureAuthenticated } = require("../middleware/ensureAuthenticated.js");

const router = express.Router();

router.get("/profile/:username", getUserProfileandRepos);
router.get("/likes", ensureAuthenticated, getLikes);
// router.post("/like/:username", ensureAuthenticated, likeProfile);

module.exports = router;
