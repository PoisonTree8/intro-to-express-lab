const express = require('express')
const app = express()
const port = 3000

// ---------------------------------------------------------------------------------------------------------------

app.get('/greetings/:username', (req, res) => {
    const username = req.params.username
    res.send(`Hello, ${username}!`)
})

// ---------------------------------------------------------------------------------------------------------------

app.get('/roll/:number', (req, res) => {
    const number = req.params.number
    
    if (isNaN(number)) {
        res.send('You must specify a number.')
        return
    }
    
    const result = Math.floor(Math.random() * (number + 1))
    res.send(`You rolled a ${result}`)
})
// ---------------------------------------------------------------------------------------------------------------
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]

app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index
    
    if (isNaN(index)) {
        res.send('This item is not yet in stock. Check back soon!')
        return
    }
    const item = collectibles[index]
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)
})
// ---------------------------------------------------------------------------------------------------------------

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
    let filteredShoes = [...shoes]
    
    if (req.query['min-price']) {
        const minPrice = req.query['min-price']
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice)
    }
    if (req.query['max-price']) {
        const maxPrice = req.query['max-price']
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice)
    }
    if (req.query.type) {
      filteredShoes = filteredShoes.filter(shoe => shoe.type === req.query.type)
    }
    res.send(filteredShoes)
})
// ---------------------------------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Express is listening on port ${port}`)
})