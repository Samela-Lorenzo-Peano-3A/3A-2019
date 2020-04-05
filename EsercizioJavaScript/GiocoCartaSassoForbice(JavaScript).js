alert("Ciao! Sono Javascript e sono pronto a servirti! ;)");

var nomeGiocatore = window.prompt("Ciao Utente, inserisci il tuo nome: ");

document.getElementById("titolo").innerHTML = "Benvenuto " + nomeGiocatore;

var sceltaUtente;

function cliccatoCarta() {
	sceltaUtente = "Carta";
	alert(nomeGiocatore + " hai scelto " + sceltaUtente); 
}

function cliccatoForbici() {
	sceltaUtente = "Forbici";
	alert(nomeGiocatore + " Hai scelto " + sceltaUtente); 
}

function cliccatoSasso() {
	sceltaUtente = "Sasso";
	alert(nomeGiocatore + " Hai scelto " + sceltaUtente); 
}

function verdetto() {
	document.getElementById("Carta").style.display = 'none';
	document.getElementById("Forbici").style.display = 'none';
	document.getElementById("Sasso").style.display = 'none';
	document.getElementById("Pulsante").style.display = 'none';
	var sceltaComputer;
	if(sceltaUtente == "Carta"){
		sceltaComputer = "Forbici";
}
	if(sceltaUtente == "Forbici"){
		sceltaComputer = "Sasso";
}
    if(sceltaUtente == "Sasso"){
		sceltaComputer = "Carta";
}
document.getElementById("Titolo").innerHTML = nomeGiocatore + "Mi dispiace, ma hai perso :( ";
document.getElementById("informazioni").innerHTML = "Il computer ha scelto " + sceltaComputer + ". Tu, stupido, hai scelto " + sceltaUtente;
}