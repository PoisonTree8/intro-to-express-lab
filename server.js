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

//exercise 4 

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get('/shoes', (req, res) => {
  let results = [...shoes];


  const min = req.query['min-price'] ? Number(req.query['min-price']) : null;
  const max = req.query['max-price'] ? Number(req.query['max-price']) : null;
  const type = req.query.type ? String(req.query.type).toLowerCase() : null;

  if (min !== null && Number.isFinite(min)) {
    results = results.filter(s => s.price >= min);
  }
  if (max !== null && Number.isFinite(max)) {
    results = results.filter(s => s.price <= max);
  }
  if (type) {
    results = results.filter(s => s.type.toLowerCase() === type);
  }

  
  if (results.length === 0) {
    return res.send('No shoes match your filters.');
  }

  
  const lines = results.map(s => `- ${s.name} (${s.type}) costs ${s.price}`);
  res.send(`Found ${results.length} shoe(s):<br>` + lines.join('<br>'));
});
