document.getElementById("toggle").addEventListener("click",fuction(event){
	event.preventDefault();
	document.getElementById("header").class.toggle("open");
	document.getElementById("body").classList.toggle("overflow-hidden");
});

var lastScrollTop = 0;
window.addEventListener("scroll", fuction(){
	var currentScroll = window.pageYOffset || document.body.scrollTop;
	if (currentScroll > lastScrollTop){
		document.getElementById("header").classList.remove("header-in");
		document.getElementById("header").style.opacity=0;
	} else {
	 	document.getElementById("header").classList.add("header-in");
	 	document.getElementById("header").classList.add("solid");
	 	document.getElementById("header").style.opacity = 1;
	}
		if(currentScroll<=3){
	 		document.getElementById("header").classList.remove("solid");
	 		document.getElementById("header").classList.remove("header-in");
 	}
	lastScrollTop = currentScroll;
}, false);
