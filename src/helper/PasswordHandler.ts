import bcrypt from 'bcrypt'

export default class PasswordHandler {
    static hash (password: string): string
    {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }

    static compare (password: string, passwordHash: string): boolean
    {
        return bcrypt.compareSync(password, passwordHash)
    }
}