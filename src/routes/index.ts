import { Router } from 'express'
import UserController from '../controllers/UserController'

const routes = Router()

routes.post('/register', UserController.register)
routes.post('/login', UserController.login)

routes.get('/user/:userId', UserController.getUser)
routes.put('/user/:userId', UserController.update)

export default routes