import outputNCards from './outputNCards.js';
import render from './render.js';
import Menu from './Menu.js';
import Bascket from './Bascket.js';
import configPay  from './configPay.js';
import {changeAddress, changePay} from './pay.js';

window.onload = () => {
 	let menu = new Menu();
	window.bascket = new Bascket();
	bascket.showBasket();
	window.products = [];
 	menu.addEvents();
 	let basket = document.querySelector('.basket');
 	basket.addEventListener('click', () => {
 		location.hash = '#basket';
 	});
 	if (location.hash == '') {
 		location.hash = '#home';
 	}
 	changeHash();
};

function changeHash() {
	let hash = location.hash;
	let content = document.querySelector('.content');
	if (localStorage.length !== 0) {
		let data = JSON.parse(localStorage['bascket']).nameProducts;
		for (let i = 0; i < data.length; i++) {
			if (bascket.productAvailability(data[i]) === false) {
				bascket.addProduct(data[i]);
				bascket.showBasket();
			}
		}
	}
	bascket.showBasket();	
	if (hash == '#home') {
 		content.innerHTML = '';
 		let home = document.querySelector('#content-home');
 		content.appendChild(home.content.cloneNode(true));
 		render('GET', 'http://localhost:3000/data/products.json', outputNCards);
	}
	if (hash == '#basket') {
 		let basketView = document.querySelector('#content-basket');
 		content.innerHTML = '';
 		content.appendChild(basketView.content.cloneNode(true));
 		let buttonCheckout = document.querySelector('.banner-pay');
		buttonCheckout.addEventListener('click', () => {
			location.hash = '#address';
		});
 		configPay();
	}
	if (hash == '#address') {
		content.innerHTML = '';
 		let shipingAddress = document.querySelector('#shiping-address');
 		content.appendChild(shipingAddress.content.cloneNode(true));
 		changeAddress();
	}
	if (hash == '#payment') {
		content.innerHTML = '';
		let pay = document.querySelector('#pay');
 		content.appendChild(pay.content.cloneNode(true));
 		changePay()
	}
	if (hash == '#paydone') {
		content.innerHTML = '';
		let paydone = document.querySelector('#paydone');
 		content.appendChild(paydone.content.cloneNode(true));
 		let buttonBack = document.querySelector('.page-one_button');
 		buttonBack.onclick = () => {
 			location.hash = '#home';
 			bascket.clear();
 			localStorage.clear();
 		};
	}
}
window.addEventListener('hashchange', changeHash);
