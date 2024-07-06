const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/leaderboard', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define schemas and models
const questionSchema = new mongoose.Schema({
    text: String,
    possibleAnswers: [String],
    correctAnswer: String,
});

const resultSchema = new mongoose.Schema({
    correctAnswers: Number,
    time: Number,
});

const Question = mongoose.model('Question', questionSchema);
const Result = mongoose.model('Result', resultSchema);

// Routes
app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/questions', async (req, res) => {
    const { text, possibleAnswers, correctAnswer } = req.body;
    const question = new Question({ text, possibleAnswers, correctAnswer });
    try {
        await question.save();
        res.status(201).json(question);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/results', async (req, res) => {
    const { correctAnswers, time } = req.body;
    const result = new Result({ correctAnswers, time });
    try {
        await result.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/leaderboard', async (req, res) => {
    try {
        const leaderboard = await Result.find().sort({ correctAnswers: -1, time: 1 }).limit(20);
        res.json(leader);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});




//testing below
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/leaderboard'; // Replace with your MongoDB connection string
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Database and Collection
const dbName = 'leaderboard';
const collectionName = 'questions';

async function run() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected successfully to server');

        // Get the database
        const db = client.db(dbName);

        // Get the collection
        const collection = db.collection(collectionName);

        // Insert a single document
        const dataPoint = { name: 'John Doe', age: 30, address: '123 Main St' };
        const insertResult = await collection.insertOne(dataPoint);
        console.log('Inserted document:', insertResult.insertedId);

        // Optionally, you can query to verify the insertion
        const findResult = await collection.findOne({ _id: insertResult.insertedId });
        console.log('Found document:', findResult);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

run().catch(console.dir);