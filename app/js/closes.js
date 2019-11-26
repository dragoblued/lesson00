export default function closesView() {
	let category = document.querySelector('.category');
 	let product = document.querySelector('#product-closes').content.cloneNode(true);
 	category.appendChild(product);
 }