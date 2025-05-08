const events = []

function saveEvent(event) {
  events.push({ ...event, timestamp: Date.now() })
}

function getEventsForCart(cartId) {
  return JSON.stringify(events.filter(e => e.cartId === cartId))
}

module.exports = { saveEvent, getEventsForCart }
