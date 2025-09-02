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
