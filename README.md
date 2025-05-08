# Architecture
---
## 1. Command Side (write):
  - handels operations like addItem, removeItem, chekout
  - Emits events (not state)
---
## 2. Event Store:
  - stores immutable events like ItemAdded, ItemRemoved
---
## 3. Event handlers:
  - update read models (query side) based on events
---
## 4. Query side (read):
  - reads denormalized card state build from events

**Example Stored Events**:
```json
[
  { "type": "ItemAdded", "data": { "cartId": "123", "itemId": "abc", "quantity": 2 } },
  { "type": "ItemRemoved", "data": { "cartId": "123", "itemId": "abc" } },
  { "type": "CartCheckedOut", "data": { "cartId": "123", "timestamp": "2025-05-08T12:34:56Z" } }
]
```

---

## Folder structure
```
shopping-cart/
├── commands/
│   └── cartCommands.js
├── events/
│   └── eventStore.js
│   └── eventHandlers.js
├── queries/
│   └── cartQueries.js
├── models/
│   └── readModel.js
├── app.js


```
--- 
## HTTPie examples:
- post item to cart
```bash
echo '{"id": 1, "name": "kita"}' | http post :3000/cart/1/add
```
- get cart
```bash
http get :3000/cart/1
```
