function initialData(inputMas) {
	if (localStorage['firstName']) {
		inputMas[0].children[1].value = localStorage['firstName'];
	}
	if (localStorage['lastName']) {
		inputMas[1].children[1].value = localStorage['lastName'];
	}
	if (localStorage['companyName']) {
		inputMas[2].children[1].value = localStorage['companyName'];
	}
	if (localStorage['country']) {
		inputMas[3].children[1].value = localStorage['country'];
	}
	if (localStorage['town']) {
		inputMas[4].children[1].value = localStorage['town'];
	}
	if (localStorage['postcode']) {
		inputMas[5].children[1].value = localStorage['postcode'];
	}
	if (localStorage['address']) {
		inputMas[6].children[1].value = localStorage['address'];
	}
	if (localStorage['email']) {
		inputMas[7].children[1].value = localStorage['email'];
	}
	if (localStorage['phone']) {
		inputMas[8].children[0].value = localStorage['phone'];
	}
}
export function changeAddress() {
	let footerPay = document.querySelector('.block-address-footer');
	let buttonNext = footerPay.children[1];
	let buttonPrev = footerPay.children[0];
	let inputMas = document.querySelectorAll('label');
	initialData(inputMas);
	buttonNext.onclick =  () => {
		let feldsAreFilled = true;
		for (let i = 0; i < 8; i++) {
			if (i == 2) continue;
			if (inputMas[i].children[1].value === '') {
				feldsAreFilled = false;
				console.log(inputMas[i]);
				inputMas[i].children[0].style.display = 'block';
			} else {
				inputMas[i].children[0].style.display = 'none';
			}
		}
		let firstName = inputMas[0].children[1].value;
		let lastName = inputMas[1].children[1].value;
		let companyName = inputMas[2].children[1].value;
		let country = inputMas[3].children[1].value;
		let town = inputMas[4].children[1].value;
		let postcode = inputMas[5].children[1].value;
		let address = inputMas[6].children[1].value;
		let email = inputMas[7].children[1].value;
		let phone = inputMas[8].children[0].value;

		localStorage.setItem('firstName', firstName);
		localStorage.setItem('lastName', lastName);
		localStorage.setItem('companyName', companyName);
		localStorage.setItem('country', country);
		localStorage.setItem('town', town);
		localStorage.setItem('postcode', postcode);
		localStorage.setItem('address', address);
		localStorage.setItem('email', email);
		localStorage.setItem('phone', phone);
		if (feldsAreFilled == true) {
			location.hash  = '#payment';
		}
	};
	buttonPrev.onclick = () => {
		location.hash  = '#basket';
	}
}
function changeDataCard(save) {
	let data = document.querySelectorAll('.input-text_name-card');
	let dataCard = document.querySelector('.name-card');
	console.log(dataCard);
	let nameCard = data[0].value;
	let cardNumber = data[1].value;
	let validTrough = dataCard.children[0].children[0].value;
	let cvv = dataCard.children[1].children[0].value;
	console.log(cvv);
	let emailCard = data[2].value;
	if (save == 1) {
		localStorage.setItem('nameCard', nameCard);
		localStorage.setItem('cardNumber', cardNumber);
		localStorage.setItem('validTrough', validTrough);
		localStorage.setItem('cvv', cvv);
		localStorage.setItem('emailCard', emailCard);
	}
	if (save == 0) {
		if (localStorage['nameCard']) {
			data[0].value = localStorage['nameCard'];
		}
		if (localStorage['cardNumber']) {
			data[1].value = localStorage['cardNumber'];
		}
		if (localStorage['validTrough']) {
			dataCard.children[0].children[0].value = localStorage['validTrough'];
		}
		if (localStorage['cvv']) {
			dataCard.children[1].children[0].value = localStorage['cvv'];
		}
		if (localStorage['emailCard']) {
			data[2].value = localStorage['emailCard'];
		}
	}
}
export function changePay() {
	let content = document.querySelector('.payment-products');
	content.innerHTML = '';
	changeDataCard(0);
	let data = JSON.parse(localStorage['bascket']).nameProducts;
	for (let  i = 0; i < data.length; i++) {
		let template = document.querySelector('#product-pay').content.cloneNode(true);
 		let imgProduct = template.querySelector('.product-img_small');
 		let nameProduct = template.querySelector('.product-name__first2');
 		let price= template.querySelector('.product-price');
 		let input = template.querySelector('.product-count');
 		imgProduct.src = "src/img/home/" + data[i].src;
 		nameProduct.innerText = data[i].firstName;
 		price.innerText = '$' + data[i].price.slice(1) * data[i].count;
 		input.placeholder = data[i].count;
 		content.appendChild(template);
 		input.addEventListener('change', (e) => {
			input.placeholder = input.value;
			bascket.changeCount(data[i].firstName, input.placeholder);
			let dataAdd = JSON.stringify(bascket);
			localStorage.setItem('bascket', dataAdd);
			bascket.showBasket();
			let price = bascket.getSum();
			localStorage.setItem('sum', price);
			changePay();
		});
	}
	let allPrice = document.querySelector('.product_charge');
	allPrice.innerText = localStorage['sum'];
	let address = document.querySelector('.block-address');
	address.children[2].innerText = 'Payment ' + allPrice.innerText;
	address.children[1].addEventListener('click', () => {
		changeDataCard(1);
		location.hash  = '#address';	
		
	});
	address.children[2].addEventListener('click', () => {
		changeDataCard(1);
		location.hash  = '#paydone';	
	});
}
