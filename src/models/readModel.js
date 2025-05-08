const carts = new Map()

function updateCart(event) {
  const cart = carts.get(event.cartId) || { items: [], checkOut: false }

  switch (event.type) {
    case 'ItemAdded':
      cart.items.push(event.item)
      break
    case 'ItemRemoved':
      cart.items = cart.items.filter(item => item.id !== event.item.id)
      break
    case 'CartCheckoutItem':
      cart.checkedOut = true
      break
  }

  carts.set(event.cartId, cart)
}

function getCart(cartId) {
  return carts.get(cartId) || { items: [], checkout: false }
}

module.exports = {
  updateCart,
  getCart,
}
