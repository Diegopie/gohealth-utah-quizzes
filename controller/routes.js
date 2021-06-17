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
router.get("/play", (req, res) => {
  res.render("play");
});

// working
router.get("/playRandom", (req, res) => {
  res.render("play-random");
});

// working
router.get("/account", (req, res) => {
  res.render("account");
});

// working
router.get("/create", (req, res) => {
  res.render("create");
});

module.exports = router;
