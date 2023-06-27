//tijera corta papel, papel tapa piedra, piedra aplasta lagarto, lagarto envenena spock, spock rompe tijeras, tijeras decapita lagarto, lagarto come papel, papel desautoriza spock, spock vaporiza piedra, piedra aplasta tijeras

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min +1)+min)
}
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1) {
        resultado = "piedra";
    } else if(jugada == 2) {
        resultado = "papel";
    } else if(jugada == 3) {
        resultado = "tijera";
    } else {
        resultado = "MAL ELEGIDO";
    }
    return resultado
}

//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let min = 1;
let max = 3;
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
    
    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    //COMBATE
    if(jugador == pc){
        alert("EMPATE");
    } else if(jugador ==1 && pc==3 || jugador ==2 && pc == 1 || jugador ==3 && pc == 2){
        alert("GANASTE");
        triunfos = triunfos +1
    } else {
        alert("PERDISTE");
        perdidas = perdidas +1
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
