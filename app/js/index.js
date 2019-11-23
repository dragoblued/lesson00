import {linkOver, linkOut} from './openMenu.js';
import outputNCards from './outputNCards.js';
import render from './render.js';
import Menu from './Menu.js';
import Bascket from './Bascket.js';
import configPay  from './configPay.js';

window.onload = () => {
 	let menu = new Menu();
	window.bascket = new Bascket();
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
	if (hash == '#home') {
 		content.innerHTML = '';
 		let home = document.querySelector('#content-home');
 		content.appendChild(home.content.cloneNode(true));
 		render('GET', 'http://localhost:3000/data/products.json', outputNCards);
	}
	if (hash == '#basket') {
 		let basket = document.querySelector('#content-basket');
 		content.innerHTML = '';
 		content.appendChild(basket.content.cloneNode(true));
 		configPay();
	}
}
window.addEventListener('hashchange', changeHash);
