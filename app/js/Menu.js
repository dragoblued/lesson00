import render from './render.js';

export default class Menu {
	constructor() {
		this.menuName = document.querySelector('.menu-name');
		this.menuFooter = document.querySelector('.menu-item-footer');
		this.menu = document.querySelector('.menu-item');
		this.list = document.querySelectorAll('.header-down__nav_link');
		this.nameMenu = '';	
		this.getTagsMenu = this.getTagsMenu.bind(this);
		this.linkOver = this.linkOver.bind(this);
		this.linkOut = this.linkOut.bind(this);
	}

	addEvents() {
		for (let  i = 0; i < this.list.length; i++) {
 			this.list[i].addEventListener('click', this.linkOver);
	 	}
	}

	getTagsMenu(data) {
		let name = this.nameMenu.replace(/\s/g, '').toLowerCase();
		let ul = [];
		for (let i = 0; i < 3; i++) {
			let dataMenu = data[name]
			ul[i] = document.createElement('ul');
			let countTitle = dataMenu[i + 1].length;
			for (let y = 0; y < countTitle; y++) {
				let li = document.createElement('li');
				let a = document.createElement('a');
				li.appendChild(a);
				a.innerText = dataMenu[i + 1][y];
				a.addEventListener('click', () => {
					location.hash = '#' + a.innerText;
				});
				ul[i].appendChild(li);
			}
			this.menuFooter.appendChild(ul[i]);
		}
	}

	linkOver(event) {
		this.menuFooter.innerHTML = '';
		this.menuName.innerText = event.target.innerText;
		this.nameMenu = event.target.innerText;
		this.menu.style.display = 'block';
		this.menu.style.marginLeft = (event.clientX - 100) + 'px';
		render('GET','http://localhost:3000/data/menu.json', this.getTagsMenu);
	}

	linkOut() {
		let idTimer = setTimeout((menu) => {
			//this.menu.style.display = 'none';
		}, 10000, this.menu);
	    this.menu.addEventListener('mouseover', openMenu(idTimer, this.menu));
	    this.menu.addEventListener('mouseout', closeMenu(this.menu));
		function openMenu(idTimer, menu) {
			clearTimeout(idTimer);
			//setTimeout(closeMenu(menu), 5000, menu); 
		}
		function closeMenu(menu) {
			menu.style.display = 'none';
		}
	}
}