export default class Product {
	constructor(firstName, lastName, price) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.price = price;
		this.count = 0;
	}
	changeCount() {
		this.count++;
	}
	zeroingCount() {
		this.count = 0;
	}
}