const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stripe = require("stripe")(process.env.KEY);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello!");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listener
exports.api = functions.https.onRequest(app);
