const button = document.querySelector('button');
const h2El = document.querySelector('h2');
const bgEl = document.querySelector('section');
button.addEventListener('click',()=> {
	let color = '#';
	color += math.random().toString(16).slice(2,8);
	bgEl.style.backgroungColor = color;
	console.log(color)
})