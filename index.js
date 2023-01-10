const express = require('express')
const rickmortyRoutes = require ('./routes/rickmortyRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/rickmorty', rickmortyRoutes)

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})