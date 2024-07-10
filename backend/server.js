const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT

require('dotenv').config()
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/leaderboard', require('./controllers/leaderboardController.js'))

// Define schemas and models
// const questionSchema = new mongoose.Schema({
//     text: String,
//     possibleAnswers: [String],
//     correctAnswer: String,
// });

// const resultSchema = new mongoose.Schema({
//     correctAnswers: Number,
//     time: Number,
// });

// const Question = mongoose.model('Question', questionSchema);
// const Result = mongoose.model('Result', resultSchema);

// Routes
// app.get('/questions', async (req, res) => {
//     try {
//         const questions = await Question.find();
//         res.json(questions);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// app.post('/questions', async (req, res) => {
//     const { text, possibleAnswers, correctAnswer } = req.body;
//     const question = new Question({ text, possibleAnswers, correctAnswer });
//     try {
//         await question.save();
//         res.status(201).json(question);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// app.post('/results', async (req, res) => {
//     const { correctAnswers, time } = req.body;
//     const result = new Result({ correctAnswers, time });
//     try {
//         await result.save();
//         res.status(201).json(result);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});