/*window.onload = () => {
	function onBorder() {
		let listDivs = document.querySelectorAll("div");
		let divNumber = Math.floor((Math.random() * listDivs.length));
		listDivs[divNumber].classList.add("border");
		let timeoutId = setTimeout(() => {
			listDivs[divNumber].classList.remove("border");
		}, 200);
	}
	let timerId = setInterval(onBorder, 200);
}*/

 window.onload = () => {
 	function f (nameProduct, home, size = 2) {
		let item = createProduct(nameProduct, 'Supplier’s Name Here','Product Name Here', '$29,354.75', size);
		home.appendChild(item);
	}
	function createProduct(nameImg, firstName, lastName, price, size) {
		let productItem = document.createElement('div');
		let productCard = document.createElement('div');	
		let productFooter = document.createElement('div');
		let productFooterLeft = document.createElement('div');
		let productFooterRight = document.createElement('div');
		let productFooterFirstName = document.createElement('p');
		let productFooterLastName = document.createElement('p');
		let productFooterPrice = document.createElement('p');
		let productFooterShowProduct = document.createElement('div');

		productFooterShowProduct.classList.add('show-product');
		productFooterRight.classList.add('list-product-item-right');
		productFooterRight.appendChild(productFooterShowProduct);
		
		productFooterFirstName.classList.add('product-card-firstname');
		productFooterFirstName.innerText = firstName;
		productFooterLastName.classList.add('product-card-lastname');
		productFooterLastName.innerText = lastName;
		productFooterPrice.classList.add('product-card-price');
		productFooterPrice.innerText = price;

		productFooterLeft.classList.add('list-product-item-left');
		productFooterLeft.appendChild(productFooterFirstName);
		productFooterLeft.appendChild(productFooterLastName);
		productFooterLeft.appendChild(productFooterPrice);

		productFooter.classList.add('list-product-item-footer');
		productFooter.appendChild(productFooterLeft);
		productFooter.appendChild(productFooterRight);

		productCard.classList.add('product-card');
		productCard.style.backgroundImage = `url(${nameImg})`;
		productItem.classList.add('list-product-item');
		productItem.appendChild(productCard);
		productItem.appendChild(productFooter);
		if (size === 0) 
			productItem.classList.add('list-product-item_home');
		else if (size === 1)
			productItem.classList.add('list-product-item_left');
		else if (size === 2)
			productItem.classList.add('list-product-item_small');
		return productItem;

	}

	let home = document.querySelector('.center');
	let homeLeft = document.querySelector('.home-left');
	let homeRight = document.querySelector('.home-right');
	let arrayImageNames = ['layer-32.png','bitmap.png','layer-31.png', 
	'image_14.png', 'image_9.png', 'image_8.png', 'image_7.png', 'image_6.png',
	'image_4.png', 'image_3.png', 'image_13.png', 'image_12.png', 
	'image_11.png', 'image_10.png', 'image_5.png', 'image_2.png', 'image.png'];
	let dir = '../src/img/home/';
	let nameProduct;
	let item, i = 0;
	let maxCount = 17;
	let count = Math.floor((Math.random() * maxCount));
	if (count <= 3) {
		for (; i < count; i++) {
			f(dir + arrayImageNames[i], home, 0);
		}
	}else {
		for (i = 0; i < 3; i++) {
			f(dir + arrayImageNames[i], home, 0);
		}
		f(dir + arrayImageNames[i], homeLeft, 1);
		for (i = i + 1; i < count; i++) {
			f(dir + arrayImageNames[i], homeRight);
			if (i === 7) break;
		}
		for (i = 8; i < count; i++) {
			if (i === 12) break;
			if (i !== 11) 	f(dir + arrayImageNames[i], homeLeft);
			else f(dir + arrayImageNames[i], homeRight, 1);
		}
		for (i = 12; i < count; i++) {
			if (i < 15 || (i < 18 && i > 16)) {
				f(dir + arrayImageNames[i], homeLeft);
			} else {
				f(dir + arrayImageNames[i], homeRight);
			}
		}
	} 

 }