const jg = document.getElementById('btn'), 
	sel = document.getElementById('uno'),
	res = document.getElementById('res'),
	selc = document.getElementById('dos'),
	cartaI = document.getElementById('car1'),
	cartaD = document.getElementById('car2');
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
	if (us == ele) result = "¡Empate!";
		else {
			if (us > ele || (us == 0 & ele == 2)) result = "¡Ha ganado!";
			else if (us < ele || (us == 2 & ele == 0))
				result = "Ha perdido...";
		}
	res.innerHTML = result;
	animar ('pulsar', res);
	cam = false;
	//jg.setAttribute ("disabled", "true");
}
function cambiar (img, num) {
	let pos = pipati (num).toLocaleLowerCase();
	console.log (num + "|" + img.classList.toString());
	for (i = 0; i < 3; i++)
		img.classList.remove (pipati(i).toLocaleLowerCase());
	void pos.offsetWidth;
	img.classList.add (pos);
}