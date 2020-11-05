class Pakiman
{
    constructor(n)
    {
        this.nombre = n;
        this.tipo = "tierra";
    }
}
var cauchin = new Pakiman("Cauchin"); // es un objeto que viene de la misma intancia pakiman
console.log(cauchin);
var pokacho = new Pakiman("Pokacho");
console.log(pokacho);