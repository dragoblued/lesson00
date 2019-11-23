export default function configPay() {
	let listProduct = document.querySelectorAll('.description-payment');
	let productInit = document.querySelectorAll('.product-item');
	listProduct[1].innerHTML = '';
	let data = JSON.parse(localStorage['bascket']).nameProducts;
	for (let  i = 0; i < data.length; i++) {
		let template = document.querySelector('#template-product').content.cloneNode(true);
		let imgProduct = template.querySelector('.product-img_style');
		let nameFirst = template.querySelector('.product-name__first');
		let nameLast = template.querySelector('.product-name__last');
		let input = template.querySelector('.product-count');
		let priceProduct = template.querySelector('.product-price');
		let productPriceAll = template.querySelector('.product-price-all');
		let buttonDelete = template.querySelector('.button-delete');
		imgProduct.src = "src/img/home/" + data[i].src;
		nameFirst.innerText = data[i].firstName;
		nameLast.innerText = data[i].lastName;
		priceProduct.innerText = data[i].price;
		input.placeholder = data[i].count;
		productPriceAll.innerText =  '$' + data[i].price.slice(1) * data[i].count;
		listProduct[1].appendChild(template);
		if (bascket.productAvailability(data[i]) === false) {
			bascket.addProduct(data[i]);
		}
		buttonDelete.addEventListener('click', (e) => {
 			bascket.deleteProduct(data[i].firstName);
			let dataAdd = JSON.stringify(bascket);
			localStorage.setItem('bascket', dataAdd);
			configPay();
 		});
	}
	let totalPay = document.querySelector('.total-pay_name1');
	let shiping = document.querySelector('.total-pay_name2');
	totalPay.innerText = '$' + bascket.getSum();
	let allPrice = document.querySelector('.banner_p_price');
	allPrice.innerText = '$' + (bascket.getSum() + Number(shiping.innerText.slice(1)));
}