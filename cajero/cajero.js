var caja = []; // Arreglo
caja["100USD"] = "100.png"; //Asignación de un valor a una posición indexada con string
caja["50USD"] = "50.png";
caja["20USD"] = "20.png";
caja["10USD"] = "10.png";
caja["5USD"] = "5.png";

class Billete
{
    constructor(n, v, c)
    {
        this.nombre = n;
        this.valor = v;
        this.cantidad = c;
    }
}
//var caja = [];
var entregado = [];
caja.push(new Billete("100USD", 100,10));
caja.push(new Billete("50USD, 50,15));
caja.push(new Billete("200USD", 20,20));
caja.push(new Billete("10USD, 10,20));
caja.push(new Billete("5USD, 5,30));
var dinero = 0;
var div =0;
var papeles=0;

var b = document.getElementById("extraer");
var resultado = document.getElementById("resultado");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (var bi of caja) //la variable bi recorre cada elemento de la caja
    {
        if (dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles)
        }
    }
    if (dinero > 0)
    {
        //console.log("No hay la cantidad de dinero solicitada");
        //document.write("No hay la cantidad de dinero solicitada");
        resultado.innerHTML = "No se puede entrega la cantidad de dinero solicitada";
    }
    else
    {
        //console.log(entregado);
        for (var e of entregado)
        {
            if (e.cantidad > 0)
            {
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $ " + e.valor + "<br/>";

            }
            //document.write(e.cantidad + " billetes de $ " + e.valor + "<br/>");
            
        }        
    }   
}
