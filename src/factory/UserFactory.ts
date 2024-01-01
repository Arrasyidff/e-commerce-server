import { UserAttributes, UserDTO } from "../dto/UserDTO";

export default class UserFactory {
    static createFromSqlObject(payload: UserAttributes) {
        return new UserDTO({
            id: payload?.id,
            fullname: payload.fullname,
            email: payload.email,
            password: payload.password,
            gender: payload.gender,
            address: payload.address,
            date_of_birth: payload.date_of_birth,
            cart: payload?.cart,
            wishlist: payload?.wishlist
        })
    }
}