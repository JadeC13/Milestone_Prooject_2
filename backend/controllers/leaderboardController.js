const router = require("express").Router();
const db = require("../models");

router.get("/", async (req, res) => {
    console.log(req.body);
    await db.Leaderboard.find().then((foundLeaderboard) => {
        res.status(200).json(foundLeaderboard);
    });
});

router.post("/"),
    async (req, res) => {
        console.log(req.body);
        try {
        await db.Leaderboard.create(req.body);
        } catch (err) {
        console.log(err);
        }
    };
module.exports = router;
