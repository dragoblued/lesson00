export default class Basket {
	constructor() {
		this.nameProducts = [];
		this.sumPrice = 0;
	}

	addProduct(product) {
		this.nameProducts.push(product);
		this.sumPrice += Number(product.price.slice(1)) * product.count;
	}

	clear() {
		this.nameProducts = [];
		this.sumPrice = 0;
	}
	
	productAvailability(product) {
		for (let i = 0; i < this.nameProducts.length; i++) {
			if (this.nameProducts[i].firstName === product.firstName) {
				return true;
			}
		}
		return false;
	}

	deleteProduct(product) {
		let index;
		for (let i = 0; i < this.nameProducts.length; i++) {
			if (product == this.nameProducts[i].firstName) {
				index = i;
				break;
			}
		} 
		this.sumPrice -= Number(this.nameProducts[index].price.slice(1)) * this.nameProducts[index].count;
		this.nameProducts.splice(index, 1);
	}

	getSum() {
		return this.sumPrice;
	}

	changeCount(product, count) {
		let countPrevious = 0;
		for (let i = 0; i < this.nameProducts.length; i++) {
			if (product == this.nameProducts[i].firstName) {
				countPrevious = this.nameProducts[i].count;
				this.nameProducts[i].count = count;
				this.sumPrice += Number(this.nameProducts[i].price.slice(1)) * (count - countPrevious);
			}
		} 
	}

	totalAmount() {
		this.sumPrice = this.nameProducts.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.price.slice(1) * currentValue.count;
		}, 0);
	}

	showBasket() {
		let div = document.querySelector('.total-sum');
		div.innerText = '$'+ this.sumPrice;
	}
}