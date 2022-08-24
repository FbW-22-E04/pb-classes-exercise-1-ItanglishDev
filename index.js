class Employee {
	constructor(firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		this.fullname = firstname + " " + lastname
		this.email = firstname.toLowerCase() + "." + lastname.toLowercase() + "@company.com"
		// Complete the code!
	}
}