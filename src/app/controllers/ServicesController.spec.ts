import ServicesController from './ServicesController'
import { createConnection } from 'typeorm'

test('must create the controller', async () => {
    const connection = await createConnection({
        database: ':memory:',
        type: 'sqlite',
        entities: ['src/app/entities/**/*.ts"']
    })

    const controller = ServicesController(connection)  
})