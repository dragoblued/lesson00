export default class Basket {
	constructor() {
		this.nameProducts = [];
		this.sumPrice= 0;
	}

	addProduct(product) {
		this.nameProducts.push(product);
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
		for (let i = 0; i < nameProducts.length; i++) {
			if (product.firstName === nameProducts[i].firstName) {
				index = i;
				break;
			}
		} 
		this.nameProducts.splice(index, 1);
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
				li.innerText = 'Name: ' + this.nameProducts[i].firstName + ' count ' +  this.nameProducts[i].price;
				ul.appendChild(li);
			}
			div.appendChild(ul);
			p.innerText = 'Total sum: ' + this.sumPrice;
			div.appendChild(p);
		}
		console.log(div);
	}
}