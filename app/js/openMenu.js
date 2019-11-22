import render from './render.js';

let menuName = document.querySelector('.menu-name');
let menuFooter = document.querySelector('.menu-item-footer');
let menu = document.querySelector('.menu-item');
let nameMenu;

function getTagsMenu(data) {
	let name = nameMenu.replace(/\s/g, '').toLowerCase();
	let ul = [];
	for (let i = 0; i < 3; i++) {
		let dataMenu = data[name]
		ul[i] = document.createElement('ul');
		let countTitle = dataMenu[i+1].length;
		for (let y = 0; y < countTitle; y++) {
			let li = document.createElement('li');
			let a = document.createElement('a');
			li.appendChild(a);
			a.innerText = dataMenu[i+1][y];
			a.href = "#";
			ul[i].appendChild(li);
		}
		menuFooter.appendChild(ul[i]);
	}
}

export function linkOver(event) {
	menuName.innerText = event.target.innerText;
	let nameMenu = event.target.innerText;
	menu.style.display = 'block';
	menu.style.marginLeft = (event.clientX - 100) + 'px';
	render('GET','http://localhost:3000/data/menu.json', getTagsMenu);
}
export function linkOut() {
	menu.style.display = 'none';
	while(menuFooter.firstChild){
    	menuFooter.removeChild(menuFooter.firstChild);
	}
}