import express from 'express'
import cors from 'cors'
import routes from './routes'

import { Connection } from 'typeorm'

const app = express()

app.use(cors())
app.use(express.json())

export default function (connection: Connection) {
    app.use(routes(connection))

    return app;
}
