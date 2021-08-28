const express = require('express');
const morgan = require('morgan');
const port = 9989;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))

app.use(morgan('dev'));

// our DB
const combos = {
  combo1: {
    main: "Spicy Chicken Sandwich",
    side: "Fries",
    drink: "Milkshake"
  },
  combo2: {
    main: "Triple Baconator",
    side: "Large Fries",
    drink: "Coke"
  },
  combo3: {
    main: "Cheese Burger",
    side: "Onion Ring Poutine - prings",
    drink: "Dr. Pepper"
  }
}

const generateId = () => {
  const number = Math.floor(Math.random() * 10000) + 1;
  return `combo${number}`
}

// Browse Get /combos
app.get('/combos', (req, res) => {
  const templateVars = { combos };
  res.render('combos', templateVars);
});

// Add POST /combos
app.post('/combos', (req, res) => {
  const comboId = generateId();
  const order = req.body;
  combos[comboId] = order;
  console.log(order);
  res.redirect('/combos')
})

// Read get /combo
// /combos/combo1
// /combos/combo2
// /combos/combo3
app.get('/combo/:id', (req, res) => {
  const comboId = req.params.id
  const combo = combos[comboId]
  const templateVars = { combo, comboId }
  if(!combo) {
    return res.redirect('/combos');    
  }
  res.render('combo', templateVars);
})

// Edit POST /combo/:id
app.post('/combo/:id', (req, res) => {
  const comboId = req.params.id;
  const order = req.body;
  combos[comboId] = order;
  res.redirect('/combos');
})

// Delete POST /combo/:id/delete
app.post('/combo/:id/delete', (req, res) => {
  const comboId = req.params.id
  delete combos[comboId]
  res.redirect('/combos')
})

app.listen(port, ()=> {
  console.log(`app is listening on port: ${port}`);
});