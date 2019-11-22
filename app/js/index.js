import {linkOver, linkOut} from './openMenu.js';
import outputNCards from './outputNCards.js';
import render from './render.js';
import Menu from './Menu.js';


window.onload = () => {
 	let menu = new Menu();
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
 		let home = document.querySelector('#content-home');
 		content.appendChild(home.content.cloneNode(true));
 		render('GET', 'http://localhost:3000/data/products.json', outputNCards);
	}
	if (hash == '#basket') {
 		let basket = document.querySelector('#content-basket');
 		console.log('basket');
 		content.innerHTML = '';
 		content.appendChild(basket.content.cloneNode(true));
	}
}
window.addEventListener('hashchange', changeHash);
