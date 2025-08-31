const express = require('express');
const app = express();
const port = 3000;

//exercise 1
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`hello, ${username}!`);
});


app.listen(port, () => {
    console.log(`Listening on port 3000`)
 });

