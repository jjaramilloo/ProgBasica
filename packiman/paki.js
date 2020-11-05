var imagenes = []; // Arreglo
imagenes["Cauchin"] = "vaca.png"; //Asignación de un valor a una posición indexada con string
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = []; // para no tener que definir uno a uno los pakimanes se hace un arreglo
coleccion.push (new Pakiman("Cauchin", 100, 30));
coleccion.push (new Pakiman("Pokacho", 80, 50));
coleccion.push (new Pakiman("Tocinauro", 120, 40));

for (var pakin of coleccion)
{
    pakin.mostrar();
}
for (var x in coleccion[0])
[
    console.log(x)
]

//console.log(imagenes);

//var cauchin = new Pakiman("Cauchin", 100, 30); // es un objeto que viene de la misma intancia pakiman
//var pokacho = new Pakiman("Pokacho", 80, 50);
//var tocinauro = new Pakiman("Tocinauro", 120, 40);
//console.log(cauchin, pokacho, tocinauro);
// Decalración de cada pakeman de forma individual:
//pokacho.mostrar();
//cauchin.mostrar();
//tocinauro.mostrar();
