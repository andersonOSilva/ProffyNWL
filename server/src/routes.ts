import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';



const routes = express.Router();

const classesControllers = new ClassesController()

const connectionsControllers = new ConnectionsController()


// localhost:3333/classes
routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

// localhost:3333/connections
routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

    
    

export default routes