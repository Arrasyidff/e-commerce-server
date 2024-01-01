import jwt from "jsonwebtoken"

export default class AccessTokenHandler {
    static sign(id: string, email: string): string
    {
        return jwt.sign({data: {id, email}}, process.env.SECRET_HASH_TOKEN || '', { expiresIn: '1h' })
    }

    static verify(token: string)
    {
        return jwt.verify(token, process.env.SECRET_HASH_TOKEN || '')
    }
}