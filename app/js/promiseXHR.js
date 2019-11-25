export default class PromiseXHR {
	send(method, url) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
      		xhr.open(method, url, true);
      		xhr.onload = function () {
	        	if (this.status === 200) {
	        		resolve(this.response);
	        	} else {
	        		const error = new Error(this.statusText);
	          		reject(error);
	        	}
      		};

      		xhr.onerror = function () {
        		reject(new Error('Network Error'));
      		};

     		 xhr.send();
		});
	}
}
