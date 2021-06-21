const express = require("express");
const router = express.Router();

// working
router.get("/", (req, res) => {
  res.render("index");
});

// working
router.get("", (req, res) => {
  res.render("index");
});

// working
router.get("/chapterQuiz", (req, res) => {
  res.render("chapter-quiz");
});

// working
router.get("/playRandom", (req, res) => {
  res.render("play-random");
});

module.exports = router;
