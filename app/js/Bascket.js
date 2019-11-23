export default class Basket {
	constructor() {
		this.nameProducts = [];
		this.sumPrice = 0;
	}

	addProduct(product) {
		this.nameProducts.push(product);
		this.sumPrice += Number(product.price.slice(1))*product.count;
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
		this.sumPrice -= Number(this.nameProducts[index].price.slice(1))*this.nameProducts[index].count;
		this.nameProducts.splice(index, 1);
	}
	getSum() {
		return this.sumPrice;
	}
	totalAmount() {
		this.sumPrice = this.nameProducts.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.price.slice(1) * currentValue.count;
		}, 0);
	}

	showBasket() {
		let div = document.querySelector('.total-sum');
		let ul = document.createElement('ul');
		let p = document.createElement('p');
		div.innerText = '';
		if (this.nameProducts.length !== 0) {
			for (let  i = 0; i < this.nameProducts.length; i++) {
				let li = document.createElement('li');
				li.innerText = 'Name: ' + this.nameProducts[i].firstName + ' price ' +  this.nameProducts[i].price + ' count ' + this.nameProducts[i].count;
				ul.appendChild(li);
			}
			div.appendChild(ul);
			p.innerText = 'Total sum: ' + this.sumPrice;
			div.appendChild(p);
		}
	}
}