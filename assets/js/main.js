document.getElementByid("toggle").addEventListener("click",fuction(event){
	event.preventDefault();
	document.getElementByid("header").class.toggle("open");
	document.getElementByid("body").classList.toggle("overflow-hidden");
});