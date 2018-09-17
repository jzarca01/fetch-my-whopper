const express = require('express')
const app = express()

const bodyParser = require('body-parser');
const fetchWhopper = require('./burger-king')

const PORT = 4000

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.post('/whopper', async (req, res) => {
    const whopper = await fetchWhopper(req.body.storeNumber, req.body.date, req.body.time)
    res.status(200).send(whopper)
})

app.listen(PORT, () => {
    console.log('You can now fetch your free whopper')
})