const { getCart } = require('../models/readModel')

function queryCart(cartId) {
  return getCart(cartId)
}

module.exports = {
  queryCart,
}
