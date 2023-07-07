function obtenerJugadaComputadora(){
 let opciones = ["piedra", "papel", "tijeras"];
 let numeroAleatorio = Math.floor(Math.random() * 3);
 return opciones[numeroAleatorio];
}
  
function obtenerJugadaUsuario(){
 const readlineSync = require('readline-sync');
 const jugadaUsuario = readlineSync.question("Ingresa tu jugada (piedra, papel o tijeras): ");
 return jugadaUsuario;
}
  
function determinarGanador(jugadaComputadora, jugadaUsuario){
 if((jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
    (jugadaComputadora === "tijeras" && jugadaUsuario === "papel") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra")){
 return "Gana la computadora";
}else if(
    (jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") ||
    (jugadaUsuario === "tijeras" && jugadaComputadora === "papel") ||
    (jugadaUsuario === "papel" && jugadaComputadora === "piedra")){
 return "Gana el usuario";
}else{
 return "Empate";
}
}
  
let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
  
console.log("La computadora eligió: " + jugadaComputadora);
console.log("El usuario eligió: " + jugadaUsuario);
console.log("El resultado fue: " + resultado);