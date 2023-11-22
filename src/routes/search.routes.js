const express = require("express");
const searchController = require("../controllers/search.controller");

const router = express.Router();

router.post("/generate", searchController.generatePaper);

module.exports = router;
