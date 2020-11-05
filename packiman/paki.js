var imagenes = []; // Arreglo
imagenes["Cauchin"] = "vaca.png"; //Asignación de un valor a una posición indexada con string
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
//console.log(imagenes);

var cauchin = new Pakiman("Cauchin", 100, 30); // es un objeto que viene de la misma intancia pakiman
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
//console.log(cauchin, pokacho, tocinauro);
pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();