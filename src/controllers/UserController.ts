import { NextFunction, Request, Response } from "express"
import services from '../services'
const { UserService } = services

class UserController {
    static async register(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try {
            let {fullname, email, password, gender, address, date_of_birth} = req.body
            const response = await UserService().register({fullname, email, password, gender, address, date_of_birth})
            res.status(200).json(response)
        } catch (error: any) {
            next(error)
        }
    }

    static async login(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try {
            const response = await UserService().login(req.body.email, req.body.password ?? null)
            res.status(200).json(response)
        } catch (error: any) {
            next(error)
        }
    }

    static async getUser(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try {
            const response = await UserService().getUserById(req.params.userId)
            res.status(200).json(response)
        } catch (error: any) {
            next(error)
        }
    }

    static async update(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try {
            let {fullname, email, gender, address, date_of_birth} = req.body
            const response = await UserService().update(req.params.userId, {fullname, email, gender, address, date_of_birth})
            res.status(200).json(response)
        } catch (error: any) {
            next(error)
        }
    }
}

export default UserController