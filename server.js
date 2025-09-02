const express = require('express');
const app = express();
const port = 3000;

//exercise 1
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`hi, ${username}!`);
});


app.listen(port, () => {
    console.log(`Listening on port 3000`)
 });

//exercise 2
app.get('/roll/:number', (req, res) => {
  const raw = req.params.number;   
  const n = Number(raw);

  if (!Number.isFinite(n) || !Number.isInteger(n) || n < 0) {
    return res.status(400).send('You must specify a number.');
  }
   const rolled = Math.floor(Math.random() * (n + 1));
  res.send(`You rolled a ${rolled}.`);
});

//exercise 3
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
  const raw = req.params.index;
  const idx = Number(raw);

  if (!Number.isInteger(idx) || idx < 0 || idx >= collectibles.length) {
    return res.send('This item is not yet in stock. Check back soon!');
  }
  const item = collectibles[idx];
  res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
});