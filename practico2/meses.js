const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingrese un numero del 1 al 12 para representar un mes");

switch(numero){

  case "1":
    mes = "enero";
    break;
      
  case "2":
    mes = "febrero";
    break;
      
  case "3":
    mes = "marzo";
    break;
      
  case "4":
    mes = "abril";
    break;

  case "5":
    mes = "mayo";
    break;

  case "6":
    mes = "junio";
    break;

  case "7":
    mes = "julio";
    break;
    
  case "8":
    mes = "agosto";
    break;

  case "9":
    mes = "septiembre";
    break;

  case "10":
    mes = "octubre";
    break;

  case "11":
    mes = "noviembre";
    break;

  case "12":
    mes = "diciembre";
    break;

 default:
    mes = "desconocido";
}


if(numero === "2"){
    cantidadDeDias = 28
}else if (numero === "4" || numero === "6" || numero === "9" || numero === "11"){
    cantidadDeDias = 30
} else {
    cantidadDeDias = 31
}


if(numero >= 1 && numero <= 12){
    console.log("La cantidad de dias del mes de", mes, "es", cantidadDeDias)
}else{
    console.log("El numero debe estar entre 1 y 12")
}