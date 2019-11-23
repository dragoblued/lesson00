import Product from './Product.js';
function createProduct(nameImg, firstName, lastName, price, size) {
	nameImg = '../src/img/home/' + nameImg;
	//let product = document.querySelector();s
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
function savingData(product, item) {
	product.changeCount();
	if (bascket.productAvailability(product) === false) {
		bascket.addProduct(product);
	}
	bascket.totalAmount();
	bascket.showBasket();
	let data = JSON.stringify(bascket);
	localStorage.setItem('bascket', data);
	localStorage.setItem('price', bascket.getSum());
}

export default function outputProtuct (product, home, size = 2, i) {
	let item = createProduct(product.name, product.firstName, product.lastName, product.pay, size);
	home.appendChild(item);
	products[i] = new Product(product.firstName, product.lastName, product.pay, item.firstChild.style.backgroundImage.split('/')[4].split('"')[0]);
	item.addEventListener('click', () => savingData(products[i], item), true);
}
