window.onload = () => {
	function onBorder() {
		let listDivs = document.querySelectorAll("div");
		let divNumber = Math.floor((Math.random() * listDivs.length));
		listDivs[divNumber].classList.add("border");
		let timeoutId = setTimeout(() => {
			listDivs[divNumber].classList.remove("border");
		}, 2000);
	}
	let timerId = setInterval(onBorder, 2000);
}