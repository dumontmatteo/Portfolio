var img = document.getElementById("img");

function setImage(){
	var source = event.srcElement.id;
	console.log(source);
	switch(source){
		case 'adesit':
			img.src = 'images/adesit.jpg';
			break;
		case 'tedxinsa':
			img.src = 'images/tedxinsa.jpg';
			break;
		case 'zaybe':
			img.src = 'images/zaybe.png';
			break;
		default:
			console.log("none");
			break;
	}
}

function resetImage(){
	img.src = '';

}