const router = require("express").Router();
const db = require("../models");

router.get("/", async (req, res) => {
    console.log(req.body);
    await db.Leaderboard.find().then((foundLeaderboard) => {
        res.status(200).json(foundLeaderboard);
    });
});

router.post("/", async (req, res) => {
    console.log(req.body);
    try {
        const newEntry = await db.Leaderboard.create(req.body);
        res.status(201).json(newEntry);
    } catch (err) {
        res.status(400).json({ error: "Bad Request" });
        console.log(err);
    }
});

module.exports = router;
