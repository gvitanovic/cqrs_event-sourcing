const { updateCart } = require('../models/readModel')

function handleEvent(event) {
  updateCart(event)
}

module.exports = { handleEvent }
