import outputProtuct from './outputProduct.js';
import Bascket from './Bascket.js';
import Product from './Product.js';

export default function outputNCards(data) {
	console.log(data);
	let home = document.querySelector('.center');
	let homeLeft = document.querySelector('.home-left');
	let homeRight = document.querySelector('.home-right');

	let nameProduct;
	let item, i = 0;
	let count= 17;
	let arrayProducts = {};

	if (count <= 3) {
		for (i = 0; i < count; i++) {
			outputProtuct(data.lists[i], home, 0);
		}
	}else {
		for (i = 0; i < 3; i++) {
			outputProtuct(data.lists[i], home, 0);
		}
		outputProtuct(data.lists[i], homeLeft, 1);
		for (i = i + 1; i < count; i++) {
			outputProtuct(data.lists[i], homeRight);
			if (i === 7) break;
		}
		for (i = 8; i < count; i++) {
			if (i === 12) break;
			if (i !== 11) 	outputProtuct(data.lists[i], homeLeft);
			else outputProtuct(data.lists[i], homeRight, 1);
		}
		for (i = 12; i < count; i++) {
			if (i < 15 || (i < 18 && i > 16)) {
				outputProtuct(data.lists[i], homeLeft);
			} else {
				outputProtuct(data.lists[i], homeRight);
			}
		}
	}
	workInBasket();
}

function workInBasket() {
	let buttonAddProduct = document.querySelectorAll('.list-product-item-footer');
	let bascket = new Bascket();
	let products = [];
	for (let i = 0; i < buttonAddProduct.length; i++) {
		let dataProduct = buttonAddProduct[i].children[0].children;
		products[i] = new Product(dataProduct[0].innerText, dataProduct[1].innerText, dataProduct[2].innerText);
		buttonAddProduct[i].addEventListener('click', (e) => {
			let productShow = document.querySelector('.total-sum');
			products[i].changeCount();
			if (bascket.productAvailability(products[i]) === false) {
				bascket.addProduct(products[i]);
			}
			bascket.totalAmount();
			//productShow.innerText = '';
			bascket.showBasket();
			console.log(bascket.sumPrice);
		}, true);
	} 
}