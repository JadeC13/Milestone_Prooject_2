const Data = [
    { name: "Alice", score: 1 },
    { name: "Bob", score: 2 },
    { name: "Charlie", score: 3 },
    { name: "David", score: 4 },
    { name: "Eve", score: 5 },
    { name: "Frank", score: 6 },
    { name: "Grace", score: 7 },
    { name: "Hannah", score: 8 },
    { name: "Ian", score: 9 },
    { name: "Jessica", score: 10 },
    { name: "Ursula", score: 1 },
    { name: "Victor", score: 2 },
    { name: "Wendy", score: 3 },
    { name: "Xavier", score: 4 },
    { name: "Yvonne", score: 5 },
    { name: "Zack", score: 6 },
    { name: "Amy", score: 7 },
    { name: "Ben", score: 8 },
    { name: "Cathy", score: 9 },
    { name: "Dan", score: 10 },
    { name: "Oscar", score: 1 },
    { name: "Penny", score: 2 },
    { name: "Quincy", score: 3 },
    { name: "Riley", score: 4 },
    { name: "Samantha", score: 5 },
    { name: "Toby", score: 6 },
    { name: "Uma", score: 7 },
    { name: "Vincent", score: 8 },
    { name: "Willa", score: 9 },
    { name: "Xander", score: 10 },
];
// The code above shows the data base of all the saves we have in the quiz for the leaderboard

export { Data };


export const questions = [
    {
        id: 'q1', text: 'What is 2+2?',
        possible: [
            { id: 'a', text: '2' },
            { id: 'b', text: '4' },
            { id: 'c', text: '0' },
            { id: 'd', text: '1' }],
        answer: 'b'
    },
    {
        id: 'q2', text: 'What is 3x4?',
        possible: [
            { id: 'a', text: '12' },
            { id: 'b', text: '16' },
            { id: 'c', text: '9' },
            { id: 'd', text: '7' }],
        answer: 'a'
    },
    {
        id: 'q3', text: 'What is 4/2?',
        possible: [
            { id: 'a', text: '8' },
            { id: 'b', text: '2' },
            { id: 'c', text: '1' },
            { id: 'd', text: '0' }],
        answer: 'b'
    },
    {
        id: 'q4', text: 'What is 2^4?',
        possible: [
            { id: 'a', text: '2' },
            { id: 'b', text: '8' },
            { id: 'c', text: '4' },
            { id: 'd', text: '16' }],
        answer: 'd'
    },
    {
        id: 'q5', text: 'What is 20x5',
        possible: [
            { id: 'a', text: '25' },
            { id: 'b', text: '4' },
            { id: 'c', text: '15' },
            { id: 'd', text: '100' }],
        answer: 'd'
    },
    {
        id: 'q6', text: 'What is 2(3+4)',
        possible: [
            { id: 'a', text: '9' },
            { id: 'b', text: '14' },
            { id: 'c', text: '1' },
            { id: 'd', text: '7' }],
        answer: 'b'
    },
    {
        id: 'q7', text: 'If this driver is driving at 45 miles per hour, how long would it take the driver to drive 15 miles?',
        possible: [
            { id: 'a', text: '20 minutes' },
            { id: 'b', text: '45 minutes' },
            { id: 'c', text: '60 minutes' },
            { id: 'd', text: '15 minutes' }],
        answer: 'a'
    },
    {
        id: 'q8', text: 'Sally needs to pick 100 apples from her trees to sell to the market tomorrow. However, her basket can only carry 7 pounds. If each apple is .75 pounds, how many times would she need to fill up her basket?',
        possible: [
            { id: 'a', text: '15 times' },
            { id: 'b', text: '10 times' },
            { id: 'c', text: '19 times' },
            { id: 'd', text: '20 times' }],
        answer: 'c'
    },
    {
        id: 'q9', text: 'What is 2x4x3x5?',
        possible: [
            { id: 'a', text: '120' },
            { id: 'b', text: '14' },
            { id: 'c', text: '28' },
            { id: 'd', text: '2' }],
        answer: 'a'
    },
    {
        id: 'q10', text: 'John worked 62 hours this week while making $21 per hour. With overtime starting after 40 hours and his pay being increased by 1.5 times, how much did John make this week?',
        possible: [
            { id: 'a', text: '$1218' },
            { id: 'b', text: '$1302' },
            { id: 'c', text: '$1533' },
            { id: 'd', text: '$1953' }
        ], answer: 'c'
    },
    {
        id: 'q11', text: 'What is 92+8? Then divided by 2? And then multiplied by 3?',
        possible: [
            { id: 'a', text: '100' },
            { id: 'b', text: '200' },
            { id: 'c', text: '50' },
            { id: 'd', text: '150' },
        ], answer: 'd'
    },
    {
        id: 'q12', text: 'Alice was born in March of 1982. During her education she was held back by 2 grades. After her highschool graduation she started on a 13 year college course for being a doctor. At what year would she have graduated from college if the average graduate from high school is between 17 and 18 depending on the year they were born? (before or after January 1st)',
        possible: [
            { id: 'a', text: '2013' },
            { id: 'b', text: '2014' },
            { id: 'c', text: '2016' },
            { id: 'd', text: '2015' },
        ], answer: 'd'
    },
    {
        id: 'q13', text: 'What is the average number (rounded down) between this array of 11 numbers? "15, 20, 8, 100, 1500, 327, 9, 5, -20, -1000, and 277',
        possible: [
            { id: 'a', text: '112' },
            { id: 'b', text: '124' },
            { id: 'c', text: '212' },
            { id: 'd', text: '224' },
        ], answer: 'a'
    },
    {
        id: 'q14', text: 'What is 2+2x5?',
        possible: [
            { id: 'a', text: '20' },
            { id: 'b', text: '10' },
            { id: 'c', text: '12' },
            { id: 'd', text: '5' },
        ], answer: 'c'
    },
    {
        id: 'q15', text: 'What is 4/2+5x3?',
        possible: [
            { id: 'a', text: '21' },
            { id: 'b', text: '17' },
            { id: 'c', text: '20' },
            { id: 'd', text: '18' },
        ], answer: 'b'
    },
    {
        id: 'q16', text: 'Jade requires every item in her household to be pink. However, she only has a small budget of $10,000 to do so. If she has 126 items left to replace as pink, what would the average price be of each item for her to be able to accomplish her goals? (rounded down)',
        possible: [
            { id: 'a', text: '$79' },
            { id: 'b', text: '$100' },
            { id: 'c', text: '$63' },
            { id: 'd', text: '$129' },
        ], answer: 'a'
    },
    {
        id: 'q17', text: 'Ray has suddenly decided that all he wanted to eat for the next 90 days was ONLY ramen. However, he wanted to mix it up and switch between 3 flavors every day. If the flavor of shrimp costs $.90, beef at $.50, and chicken is priced at $1.20, how much would he have to spend to eat ramen for 3 meals a day for 90 days?',
        possible: [
            { id: 'a', text: '$324' },
            { id: 'b', text: '$423' },
            { id: 'c', text: '$342' },
            { id: 'd', text: '$234' },
        ], answer: 'd'
    },
    {
        id: 'q18', text: 'What is the square root of 64?',
        possible: [
            { id: 'a', text: '8' },
            { id: 'b', text: '6' },
            { id: 'c', text: '4' },
            { id: 'd', text: '2' },
        ], answer: 'a'
    },
    {
        id: 'q19', text: 'If Chuck can memorize 1000 words in a minute and a book contains 150 words per page, how long would it take for Chuck to memorize a book with 275 pages?',
        possible: [
            { id: 'a', text: '61 minutes' },
            { id: 'b', text: '31 minutes' },
            { id: 'c', text: '41 minutes' },
            { id: 'd', text: '51 minutes' },
        ], answer: 'c'
    },
    {
        id: 'q20', text: 'A group of bodybuilders are trying to lift up an object that weighs 2,350 pounds. If each bodybuilder can lift around 180 pounds, how many would it take to lift up the object?',
        possible: [
            { id: 'a', text: '12' },
            { id: 'b', text: '12.5' },
            { id: 'c', text: '13' },
            { id: 'd', text: '13.5' },
        ], answer: 'c'
    },
];