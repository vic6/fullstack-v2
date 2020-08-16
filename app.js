const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Sup dog')
})

app.listen(port, () => console.log(`this app be listenin on Port: ${port}`))
