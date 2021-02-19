var img = document.getElementById("img");


function setImage(){
	var source = event.srcElement.id;
	console.log(source);
	switch(source){
		case 'adesit':
			img.src = 'images/adesit-min.png';
			break;
		case 'tedxinsa':
			img.src = 'images/tedxinsa-min.png';
			break;
		case 'zaybe':
			img.src = 'images/zaybe-min.png';
			break;
		default:
			console.log("none");
			break;
	}
}

function resetImage(){
	img.src = '';

}

function toFrench(argument) {
	document.getElementById("title").innerHTML = "Eleve-Ingénieur en Informatique à l'INSA de Lyon, à la recherche d'un stage de 3 mois en developpement web front-end.";
	document.getElementById("sub-title").innerHTML = "Passioné de design je cherche aussi à consolider et developper mes connaissances en developpement.";
	document.getElementById("button").innerHTML = "VOIR MON CV";
	document.getElementById("work-title").innerHTML = "VOIR MES PROJETS";
	document.getElementById("footer-title").innerHTML = "Mes réseaux";
	document.getElementById("cv").href = "files/cv_dumont_matteo.pdf";
	
	if (document.documentElement.lang == "en") {
		document.getElementById("underline").style.transform = "translateX(-35px)";
	}

	document.documentElement.lang = "fr"; 
}

function toEnglish(argument) {
	document.getElementById("title").innerHTML = "I'm an IT Engineering student at INSA Lyon looking for a 3-month front-end web development internship.";
	document.getElementById("sub-title").innerHTML = "I am passionate about design and am looking forward to enhance my development skills.";
	document.getElementById("button").innerHTML = "SEE MY RESUME";
	document.getElementById("work-title").innerHTML = "SEE MY WORK";
	document.getElementById("footer-title").innerHTML = "My Socials";
	document.getElementById("cv").href = "files/resume_dumont_matteo.pdf";

	if (document.documentElement.lang == "fr") {
		document.getElementById("underline").style.transform = "translateX(0px)";
	}

	document.documentElement.lang = "en";
}