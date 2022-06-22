const jg = document.getElementById('btn'), 
	sel = document.getElementById('uno'),
	res = document.getElementById('res'),
	selc = document.getElementById('dos'),
	cartaI = document.getElementById('car1'),
	cartaD = document.getElementById('car2'),
	con = document.getElementById('uscon'),
	conc = document.getElementById('aqcon');
let ele, cam = false;
function ajugar () {
	//jg.removeAttribute ("disabled");
	animar('pulsar', jg);
	elegir ();
}
function elegir () {
	selc.value = "elegido";
	let cpu =  Math.floor (Math.random () * 2.4 + 0.5);
	ele = cpu;
	cam = true;
	cambiar (cartaI, sel.selectedIndex);
	cambiar (cartaD, -1);
	res.innerHTML = "¿Preparado?";
}
function pipati (num) { 
	switch (num) {
		case -1: return "Oculto";
		case 0: return "Piedra";
		case 1: return "Papel";
		case 2: default: return "Tijeras";
	}
}
function jugar () {
	if (!cam) elegir ();
	let result, us = sel.selectedIndex;
	selc.value = pipati (ele);
	cambiar (cartaI, us);
	cambiar (cartaD, ele);
	if (us == ele) { result = resultar (0); }
		else {
			if (us > ele || (us == 0 & ele == 2)) { 
				result = resultar (1);
			} else if (us < ele || (us == 2 & ele == 0)) {
				result = resultar (2); 
			}
		}
	res.innerHTML = result;
	animar ('pulsar', res);
	cam = false;
	//jg.setAttribute ("disabled", "true");
}
function cambiar (img, num) {
	let pos = pipati (num).toLocaleLowerCase();
	alterar (img, pos, "piedra", "papel", "tijeras");
}
function resultar (num) {
	let msg = "", inc = con, dec = conc, color, color2;
	switch (num) {
		case 0: msg = "¡Empate!"; inc = con; color = color2 = "azul";
			break;
		case 1: msg = "¡Ha ganado!"; con.value = +con.value + 1;
			color = "verde"; color2 = "rojo";
			break;
		case 2: default: msg = "Ha perdido..."; conc.value = +conc.value + 1;
			color = "rojo"; color2 = "verde";
	}
	document.getElementById("cant").value++;
	alterar (inc, color, "rojo", "azul", "verde");
	alterar (dec, color2, "rojo", "azul", "verde");
	alterar (res, color, "rojo", "azul", "verde");
	return msg;
}
function alterar (elem, agregar, remover) {
	if (arguments.length > 3) for (let c = 3; c < arguments.length; c++) elem.classList.remove (arguments[c]);
	elem.classList.remove (remover);
	void elem.offsetWidth;
	elem.classList.add (agregar);
}