export type UserAttributes = {
    id?: string,
    fullname: string,
    email: string,
    password?: string,
    gender: 'male' | 'female',
    address: string,
    date_of_birth: Date,
    cart?: Array<string> | null,
    wishlist?: Array<string> | null
} 

export class UserDTO {
    private id: string
    private fullname: string
    private email: string
    private password: string
    private gender: 'male' | 'female'
    private address: string
    private date_of_birth: Date
    private cart?: Array<string> | null
    private wishlist?: Array<string> | null

    constructor(payload: UserAttributes) {
        this.id = payload.id ?? ''
        this.fullname = payload.fullname
        this.email = payload.email
        this.password = payload.password ?? ''
        this.gender = payload.gender
        this.address = payload.address
        this.date_of_birth = payload.date_of_birth
        this.cart = payload.cart
        this.wishlist = payload.wishlist
    }

    public getId(): string
    {
        return this.id

    }
    public getEmail(): string
    {
        return this.email
    }

    public getPassword(): string
    {
        return this.password
    }

    public getReponseFormat(): object
    {
        return {
            id: this.id,
            fullname: this.fullname,
            email: this.email,
            gender: this.gender,
            address: this.address,
            date_of_birth: this.date_of_birth,
            cart: this.cart,
            wishlist: this.wishlist
        }
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