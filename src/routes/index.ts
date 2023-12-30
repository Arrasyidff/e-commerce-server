import { Router } from 'express'

const routes = Router()

routes.post('/login', (req, res) => {
    res.json('Hello World')
})

export default routes