const jg = document.getElementById('btn'), 
	sel = document.getElementById('uno'),
	res = document.getElementById('res'),
	selc = document.getElementById('dos');
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
	res.innerHTML = "¿Preparado?";
}
function jugar () {
	if (!cam) elegir ();
	let result, us = sel.selectedIndex, cp = ele;
	switch (ele) {
		case 0: selc.value = "Piedra"; break;
		case 1: selc.value = "Papel"; break;
		case 2: default: selc.value = "Tijeras";
	}
	if (us == cp) result = "¡Empate!";
		else {
			if (us > cp || (us == 0 & cp == 2)) result = "¡Ha ganado!";
			else if (us < cp || (us == 2 & cp == 0))
				result = "Ha perdido...";
		}
	console.log (us + " x " + cp + " > " + result);
	res.innerHTML = result;
	animar ('pulsar', res);
	cam = false;
	//jg.setAttribute ("disabled", "true");
}