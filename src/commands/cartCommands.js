const { saveEvent, getEventsForCart } = require('../events/eventStore')
const { handleEvent }  = require('../events/eventHandlers')

function executeCommand(command) {
  const { cartId, type, item } = command

  let event

  switch (type) {
    case 'AddItem':
      event = {type: 'ItemAdded', cartId, item }
      break
    case 'RemoveItem':
      event = { type: 'ItemRemoved', cartId, item }
      break
    case 'Checkout':
      event = { type: 'CartCheckedOut', cartId }
      break
    default:
      throw new Error('Unknown command type')
  }

  saveEvent(event)
  console.log(`Events for the cart: ${getEventsForCart(event.cartId)}`)
  handleEvent(event)
}

module.exports = {
  executeCommand
}
