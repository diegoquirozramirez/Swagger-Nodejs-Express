const express = require('express')
const swaggerjdocs = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = require('./swagger')
const app = express();

const port = process.env.PORT || 5000;


const swaggerDocs = swaggerjdocs(swaggerOptions.swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


app.get('/customer', (req, res) => {
    res.json({
        codRes: "00"
    })
})

app.get('/customer/:customerId', (req, res) => {
    res.json({
        msm: "Respuesta 200"
    })
})

app.post('/newCustomer', (req, res) => {
    res.json({
        msm: "Respuesta 200"
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})