import express from 'express'
import ServicesController from './controllers/ServicesController'
import { Connection } from 'typeorm'

const routes = express.Router()

export default function (connection: Connection) {
    const serviceController = ServicesController(connection)

    routes.get('/services', serviceController.getAll)

    return routes
}