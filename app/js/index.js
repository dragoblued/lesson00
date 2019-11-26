import outputNCards from './outputNCards.js';
import returnObjectJSON from './render.js';
import Menu from './Menu.js';
import Bascket from './Bascket.js';
import configPay  from './configPay.js';
import {changeAddress, changePay} from './pay.js';
import closesView from './closes.js'
import PromiseXHR from './promiseXHR.js';

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

		content.innerHTML = '';
	bascket.showBasket();	
	if (hash == '#home') {
 		let home = document.querySelector('#content-home');
 		content.appendChild(home.content.cloneNode(true));
		const pkhr = new PromiseXHR();
 		pkhr.send('GET', 'http://localhost:3000/data/products.json')
 			.then(result => returnObjectJSON(result))
 			.then(result => outputNCards(result))
 			.catch(error => console.log(error.message));
	}
	if (hash == '#basket') {
 		let basketView = document.querySelector('#content-basket');
 		content.appendChild(basketView.content.cloneNode(true));
 		let buttonCheckout = document.querySelector('.banner-pay');
		buttonCheckout.addEventListener('click', () => {
			location.hash = '#address';
		});
 		configPay();
	}
	if (hash == '#address') {
		let loading = document.querySelector('#loader');
		content.appendChild(loading.content.cloneNode(true));
		setTimeout(() => {
			content.innerHTML = '';
			let shipingAddress = document.querySelector('#shiping-address');
 			content.appendChild(shipingAddress.content.cloneNode(true));
 			changeAddress();
		}, 3000);
 		
	}
	if (hash == '#payment') {
		let pay = document.querySelector('#pay');
 		content.appendChild(pay.content.cloneNode(true));
 		changePay()
	}
	if (hash == '#paydone') {
		let loading = document.querySelector('#loader');
		content.appendChild(loading.content.cloneNode(true));
		setTimeout(() => {
			content.innerHTML = '';
			let paydone = document.querySelector('#paydone');
 			content.appendChild(paydone.content.cloneNode(true));
 			let buttonBack = document.querySelector('.page-one_button');
 			buttonBack.onclick = () => {
 				location.hash = '#home';
 				bascket.clear();
 				localStorage.clear();
 			};
		}, 3000);
	}
	if (hash == '#clothing') {
		console.log('dd');
		let closes = document.querySelector('#closes');
 		content.appendChild(closes.content.cloneNode(true));
 		closesView();
	}
}
window.addEventListener('hashchange', changeHash);
