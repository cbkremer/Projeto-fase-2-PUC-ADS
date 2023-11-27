function slide1(){
	document.getElementById('img_sobre').src="imagens/pizza1.jpg";
	setTimeout("slide2()", 2000);
}
function slide2(){
	document.getElementById('img_sobre').src="imagens/pizza1.png";
	setTimeout("slide3()", 2000);
}
function slide3(){
	document.getElementById('img_sobre').src="imagens/pizza2.png";
	setTimeout("slide1()", 2000);
}
function teste(){
	alert("asdasd");
}