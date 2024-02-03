import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

// Get a list of beers
router.get("/beers", async (req, res) => {
  let collection = await db.collection("beers");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

// Get a list of seltzers
router.get("/seltzers", async (req, res) => {
  let collection = await db.collection("seltzers");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

// Get a list of wines
router.get("/wines", async (req, res) => {
  let collection = await db.collection("wines");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

// Get a list of non-alcoholics
router.get("/nas", async (req, res) => {
  let collection = await db.collection("nas");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

export default router;