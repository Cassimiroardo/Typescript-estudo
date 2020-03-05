import express = require( 'express' )
import cors = require('cors')

import routes from './routes'

const port: number = 3333

const app = express()

app.use(cors())
app.use(routes)

app.listen(port, _ => {
    console.log("server running on port: " + port)
})