import { Request, Response } from "express";
import Service from '../entities/Service'
import { Connection } from "typeorm";

export default function ServicesController(connection: Connection) {
    const services = connection.getRepository(Service)

    return {
        async getAll(req: Request, res: Response) {
            try {
                const allServices = services.find()
                res.send({ services: allServices })
            } catch(error){
                res.status(400).send({ error })
            }
        }
    }
}