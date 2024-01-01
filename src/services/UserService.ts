import models from '../models'
const { User } = models

export default class UserService {
    async login(email: string) {
        try {
            const userRequest = await User.findOne({where: {email}})
            if (!userRequest) throw {name: 'invalid_account'}

            return userRequest
        } catch (error) {
            throw error
        }
    }
}