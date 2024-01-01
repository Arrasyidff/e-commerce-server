export type UserAttributes = {
    fullname: string,
    email: string,
    password: string,
    gender: 'male' | 'female',
    address: string,
    date_of_birth: Date,
    cart: Array<string>,
    wishlist: Array<string>
} 

export class UserDTO {
    private id?: string | null
    private fullname: string
    private email: string
    private password: string
    private gender: 'male' | 'female'
    private address: string
    private date_of_birth: Date
    private cart: Array<string>
    private wishlist: Array<string>

    constructor(id: string | null, payload: UserAttributes) {
        this.id = id
        this.fullname = payload.fullname
        this.email = payload.email
        this.password = payload.password
        this.gender = payload.gender
        this.address = payload.address
        this.date_of_birth = payload.date_of_birth
        this.cart = payload.cart
        this.wishlist = payload.wishlist
    }

    public serializeToObject(): object
    {
        return {
            id: this.id,
            fullname: this.fullname,
            email: this.email,
            password: this.password,
            gender: this.gender,
            address: this.address,
            date_of_birth: this.date_of_birth,
            cart: this.cart,
            wishlist: this.wishlist
        }
    }
}