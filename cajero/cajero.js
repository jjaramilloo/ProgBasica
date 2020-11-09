var imagenes = []; // Arreglo
imagenes ["100USD"] = "100.jpg"; //Asignación de un valor a una posición indexada con string
imagenes ["USD"] = "50.jpg";
imagenes ["20USD"] = "20.jpg";
imagenes ["10USD"] = "10.jpg";
imagenes ["5USD"] = "5.jpg";

class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}
var caja = [];
var entregado = [];
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 15));
caja.push(new Billete(20, 20));
caja.push(new Billete(10, 20));
caja.push(new Billete(5, 30));
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
