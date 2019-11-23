export default class Product {
	constructor(firstName, lastName, price, src) {
		this.firstName = firstName;
		this.src = src;
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