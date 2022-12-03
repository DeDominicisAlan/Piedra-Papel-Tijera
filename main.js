const piedra = document.querySelector(".piedra");
const papel = document.querySelector(".papel");
const tijera = document.querySelector(".tijera");
const jugador_elec = document.querySelector("#res-jug");
const computer_elec = document.querySelector('#res-pc');
const ganador = document.querySelector('#resultado');
const  img_ju = document.querySelector('#img-jg');
const  img_pc = document.querySelector('#img-pc');

var ptUs = 0, ptPC = 0, rondas = 0;

function getComputerChoice(){
	const pc = ["piedra","papel","tijera"];
	return pc[Math.floor(Math.random()*3)];
}

function ronda(player,computer){
	if(((player === 'piedra') && (computer === 'tijera')) | ((player === "tijera") && (computer === "papel")) |
	((player === "papel") && (computer === "piedra"))){
		
		jugador_elec.innerHTML = 'Player win - Player seleccion: '+ player +' - Computer seleccion: ' + computer;
		
		ptUs++;

	} else if(((player === 'piedra') && (computer === 'papel')) | ((player === "tijera") && (computer === "piedra")) |
	((player === "papel") && (computer === "tijera"))){
		
		jugador_elec.innerHTML = 'Computer win - Player seleccion: '+ player +' - Computer seleccion: ' + computer;
		
		ptPC++;

	} else {

		jugador_elec.innerHTML = "Draw";
	}
}



function game(eleccion){
		if((ptUs!==5)&&(ptPC!==5)){
			ronda(eleccion,getComputerChoice());

			console.log(ptUs+'-'+ptPC);
			rondas++;

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
		game('piedra')
	}else
	if(e.target.classList.contains('papel')){
		game('papel')
	}else
	if(e.target.classList.contains('tijera')){
		game('tijera')
	}
});