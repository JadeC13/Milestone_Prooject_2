// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
// const leaderboard = require('../../frontend/src/components/leaderboard')


const leaderboardSchema = new Schema({
    name: { type: String, required: true },
    correctAnswers: { type: String },
    time: { type: String }
})

const leaderboard = mongoose.model('leaderboard',  leaderboardSchema)

module.exports = leaderboard