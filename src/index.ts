import "reflect-metadata";
import { createConnection, ConnectionOptions } from "typeorm";
import ormConfig from '../ormconfig.json'

import app from './app'

createConnection(ormConfig as ConnectionOptions).then(async connection => {
    app(connection)
        .listen(3000, () => console.log('server listening on port 3000'))
}).catch(error => console.log(error));

