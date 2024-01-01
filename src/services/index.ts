import UserService from "./UserService"

export default class Service {
	static UserService () {
		return (new UserService())
	}

	// static StudentService () {
	// 	return new (require('./StudentService'))
	// }

	// static ClassService () {
	// 	return new (require('./ClassService'))
	// }

	// static SubjectService () {
	// 	return new (require('./SubjectService'))
	// }

	// static StudentClassService () {
	// 	return new (require('./StudentClassService'))
	// }

	// static RaportTemplateService () {
	// 	return new (require('./RaportTemplateService'))
	// }

	// static StudentRaportService () {
	// 	return new (require('./StudentRaportService'))
	// }
}