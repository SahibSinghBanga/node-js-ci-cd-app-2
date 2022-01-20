const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World From Root!')
})

app.get('/health', (req, res) => {
  res.status(200).json({
    'success': true,
    'status': 200,
    'health': 'ok'
  })
})

app.listen(port, () => {
  console.log(`App Running @ http://localhost:${port}`)
})