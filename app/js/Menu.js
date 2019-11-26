import returnObjectJSON from './render.js';
import PromiseXHR from './promiseXHR.js';

export default class Menu {
	constructor() {
		this.menuName = document.querySelector('.menu-name');
		this.menuFooter = document.querySelector('.menu-item-footer');
		this.menu = document.querySelector('.menu-item');
		this.list = document.querySelectorAll('.header-down__nav_link');
		this.nameMenu = '';	
		this.getTagsMenu = this.getTagsMenu.bind(this);
		this.linkOver = this.linkOver.bind(this);
		this.id = 0;
	}

	addEvents() {
		for (let  i = 0; i < this.list.length; i++) {
 			this.list[i].addEventListener('mouseover', this.linkOver);
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
					location.hash = '#' + a.innerText.toLowerCase();
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
		this.menu.style.marginLeft = event.target.getBoundingClientRect().left - 80 + 'px';
		this.id = setTimeout(() => {this.menu.style.display = 'none'}, 1000);
		this.menu.addEventListener('mouseover', () => {
			clearTimeout(this.id);
			this.menu.onmouseout = () => {
				this.id = setTimeout(() => {this.menu.style.display = 'none'}, 1000);
			};
		})
		
 		const pkhr = new PromiseXHR();
 		pkhr.send('GET', 'http://localhost:3000/data/menu.json')
 			.then(result => returnObjectJSON(result))
 			.then(result => this.getTagsMenu(result))
 			.catch(error => console.log(error.message));
	}
}