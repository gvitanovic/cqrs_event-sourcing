const express = require('express')
const { executeCommand }  = require('./commands/cartCommands')
const { queryCart }  = require('./queries/cartQueries')

const app = express()
app.use(express.json())

app.post('/cart/:id/add', (req, res) => {
  executeCommand({ type: 'AddItem', cartId: req.params.id, item: req.body})
  res.status(200).send({message: 'Item added'})
})

app.get('/cart/:id', (req, res) => {
  try {
    const cart = queryCart(req.params.id)
    res.status(200).send(cart)
  } catch(e) {
    res.status(500).send(`Cart not found ${e}`)
  }
})

app.post('/cart/:id/remove', (req, res) => {
  executeCommand({ type: 'RemoveItem', cartId: req.params.id, item: req.body})
  res.status(200).send('Cart removed')
})

app.post('/cart/:id/checkout', (req, res) => {
  executeCommand( {'type': 'Checkout', cartId: req.params.id })
  res.status(200).send('Cart checkout ok')
})

const PORT = process.env.PORT || 8000
const USER = process.env.USER

app.listen(PORT, () => {
  console.log(`Server running on  port ${PORT} on user: ${USER}`)
})
