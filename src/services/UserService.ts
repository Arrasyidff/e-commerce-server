import PasswordHandler from '../helper/PasswordHandler'
import { UserAttributes, UserDTO } from '../dto/UserDTO'
import models from '../models'
import UserFactory from '../factory/UserFactory'
import AccessTokenHandler from '../helper/AccessTokenHandler'
const { User } = models

export default class UserService {
    async register(payload: UserAttributes) : Promise<object>
    {
        try {
            if (!(['male', 'female']).includes(payload.gender)) throw {message: 'Sorry, the gender you selected is not available in our system.', status: 400}
            payload.password = PasswordHandler.hash(payload.password)
            const user = new UserDTO(payload)
            const userRequest = await User.create(user.serializeToObject())
            return {success: true, message: 'Data found', data: userRequest}
        } catch (error) {
            throw error
        }
    }

    async login(email: string, password: string) {
        try {
            const userRequest = await User.findOne({where: {email}})
            if (!userRequest) throw {name: 'invalid_account'}

            const user = UserFactory.createFromSqlObject(userRequest)
            if (!PasswordHandler.compare(password, user.getPassword())) throw {name: 'invalid_account'}
            
            return {
                success: true,
                message: 'Data found',
                data: {
                    access_token: AccessTokenHandler.sign(user.getId(), user.getEmail())
                }
            }
        } catch (error) {
            throw error
        }
    }
}