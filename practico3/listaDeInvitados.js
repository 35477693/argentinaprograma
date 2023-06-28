//Desordenado
let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let admitidos = [];
let rechazados = [];

for(let i= 0; i< personas.length; i++){
 if(personas[i] === "Jose" || personas[i] === "Sofia"){
  rechazados.push(personas[i]);
}else{
  admitidos.push(personas[i]);
}
}

let listaDeAdmitidos = "La lista de invitados admitidos es: ";

for(let i= 0; i< admitidos.length; i++){
 if(i === admitidos.length -2){
  listaDeAdmitidos += admitidos[i] + " y ";
}else if(i === admitidos.length -1){
  listaDeAdmitidos += admitidos[i] + ".";
}else{
  listaDeAdmitidos += admitidos[i] + ", ";
}
}
console.log(listaDeAdmitidos);

let listaDeRechazados = "La lista de invitados rechazados es: ";

for(let i= 0; i< rechazados.length; i++){
 if(i === rechazados.length -2){
  listaDeRechazados += rechazados[i] + " y ";
}else if(i === rechazados.length -1){
  listaDeRechazados += rechazados[i] + ".";
}else{
  listaDeRechazados += rechazados[i] + ", ";
}
}
console.log(listaDeRechazados);