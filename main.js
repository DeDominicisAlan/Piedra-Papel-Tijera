const piedra = document.querySelector(".piedra");
const papel = document.querySelector(".papel");
const tijera = document.querySelector(".tijera");
const jugador_elec = document.querySelector("#res-jug");
const computer_elec = document.querySelector('#res-pc');
const ganador = document.querySelector('#resultado');
const  img_ju = document.querySelector('#img-jg');
const  img_pc = document.querySelector('#img-pc');

var ptUs = 0, ptPC = 0;

function getComputerChoice(){
	const pc = ["piedra","papel","tijera"];
	return pc[Math.floor(Math.random()*3)];
}

function modificarImagen(computer){
	if(computer == 'papel'){
		img_pc.setAttribute('src','Images/papel.png');
	}else if(computer == 'piedra'){
		img_pc.setAttribute('src','Images/piedra.png');
	}else if(computer == 'tijera'){
		img_pc.setAttribute('src','Images/tijera.png');
	}
}

function ronda(player,computer){
	if(((player == 'piedra') && (computer == 'tijera')) || ((player == "tijera") && (computer == "papel")) ||
	((player == "papel") && (computer == "piedra"))){
		modificarImagen(computer);
		ptUs++;
	} if(((player == 'piedra') && (computer == 'papel')) || ((player == "tijera") && (computer == "piedra")) ||
	((player == "papel") && (computer == "tijera"))){
		modificarImagen(computer);
		ptPC++;
	}
}



function game(eleccion){
		if((ptUs!==5)&&(ptPC!==5)){
			ronda(eleccion,getComputerChoice());
			jugador_elec.innerHTML = 'Jugador: '+ptUs;
			computer_elec.innerHTML = 'Computadora: '+ptPC;
		}

		if(ptUs == 5 && ptUs>ptPC){
			ganador.innerHTML = 'Gano el Usuario';
		}else if(ptPC == 5 && ptUs<ptPC){
			ganador.innerHTML = 'Gano la computadora'
		}
}

const botones = document.querySelector('#botones');

botones.addEventListener('click', (e) => {
	if(e.target.classList.contains('piedra')){
		img_ju.setAttribute("src","Images/piedra.png");
		game('piedra');
	}
	if(e.target.classList.contains('papel')){
		img_ju.setAttribute("src","Images/papel.png");
		game('papel');
	}
	if(e.target.classList.contains('tijera')){
		img_ju.setAttribute("src","Images/tijera.png");
		game('tijera');
	}
});