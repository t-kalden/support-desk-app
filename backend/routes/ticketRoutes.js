const express = require("express");
const router = express.Router();
const {
  getTickets,
  createTickets,
  getTicket,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTickets);

router.route("/:id").get(protect, getTicket);

module.exports = router;
