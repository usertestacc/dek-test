const express = require("express");
const { explorePopularRepos } = require("../Controllers/explore.controller");
const router = express.Router();

router.get("/repos/:language", explorePopularRepos);

module.exports = router;
