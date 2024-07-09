// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

const leaderboardSchema = new Schema({
    name: { type: String, required: true },
    correctAnswers: { type: String },
    time: { type: String }
})

const Leaderboard = mongoose.model('leaderboard',  leaderboardSchema)

module.exports = Leaderboard