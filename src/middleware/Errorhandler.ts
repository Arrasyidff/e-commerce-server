import { Request, Response, NextFunction } from 'express'

export default (err: any, req: Request, res: Response, next: NextFunction) => {
	const {name, status, message, snapshot} = err
	switch (name) {
		case 'SequelizeUniqueConstraintError':
			res.status(400).json({
				success: false,
				message: err.errors[0].message
			})
			break;
		case 'SequelizeValidationError':
			res.status(400).json({
				success: false,
				message: err.errors[0].message
			})
			break;
		case 'invalid_account':
			res.status(401).json({
				success: false,
				message: 'Invalid credentials. Please check your email and password and try again'
			})
			break;
		case 'not_found':
			res.status(404).json({
				success: false,
				message: 'data not found'
			})
			break;
		case 'authenticate':
			res.status(401).json({
				success: false,
				message: 'Unable to authenticate. Please make sure your credentials are correct and try again'
			})
			break;
		default:
			res.status(status ?? 500).json({
				success: false,
				message: message ?? 'internal service error',
				snapshot: snapshot ?? null
			})
			break;
	}
}