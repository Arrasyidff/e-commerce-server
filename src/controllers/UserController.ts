import { NextFunction, Request, Response } from "express"
import services from '../services'
const { UserService } = services

class UserController {
    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await UserService().login(req.body.email)
            res.status(200).json(response)
        } catch (error: any) {
            next(error)
        }
    } 
}

export default UserController