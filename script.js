//your JS code here. If required.
function Hello() {
	return new Promise((resolve)=>{
		setTimeout(()=> {
			resolve('Hello, world!');
		},1000);
	});
}
const outElement = document.getElementById('output');

Hello()
.then((message)=> {
	outputElement.textContent  = message;
})
.catch((error)=> {
	console.log('Error',error);
});