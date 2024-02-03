import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

// Get a list of team members
router.get("/", async (req, res) => {
  let collection = await db.collection("team");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

export default router;