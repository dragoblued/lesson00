import outputProtuct from './outputProduct.js';

export default function outputNCards(data) {
	
	let home = document.querySelector('.center');
	let homeLeft = document.querySelector('.home-left');
	let homeRight = document.querySelector('.home-right');
	let nameProduct;
	let item, i = 0;
	let count= 17;
	let arrayProducts = {};

	if (count <= 3) {
		for (i = 0; i < count; i++) {
			outputProtuct(data.lists[i], home, 0, i);
		}
	}else {
		for (i = 0; i < 3; i++) {
			outputProtuct(data.lists[i], home, 0, i);
		}
		outputProtuct(data.lists[i], homeLeft, 1, i);
		for (i = i + 1; i < count; i++) {
			outputProtuct(data.lists[i], homeRight, 2, i);
			if (i === 7) break;
		}
		for (i = 8; i < count; i++) {
			if (i === 12) break;
			if (i !== 11) 	outputProtuct(data.lists[i], homeLeft, 2, i);
			else outputProtuct(data.lists[i], homeRight, 1, i);
		}
		for (i = 12; i < count; i++) {
			if (i < 15 || (i < 18 && i > 16)) {
				outputProtuct(data.lists[i], homeLeft, 2, i);
			} else {
				outputProtuct(data.lists[i], homeRight, 2, i);
			}
		}
	}
}