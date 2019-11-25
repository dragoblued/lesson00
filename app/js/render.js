/*export function render(type, path, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open(type, path, true);
	xhr.onload = () => {
		if (xhr.status === 200) {
			let data = JSON.parse(xhr.responseText);
			callback(data);
		} else {
			console.log('Error');
		}
	};
	xhr.send();
}*/
export default function returnObjectJSON (data) {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(data));
    } catch (e) {
      reject(e);
    }
  });
}