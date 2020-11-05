class Pakiman
{
    constructor(n, v, a)
    {
        this.imagen = new Image(); // se crea una imagen incertada en el documento
        this.nombre = n; //esta es una caracteristica que se varia segun el personaje
        this.vida = v;
        this.ataque = a;
        this.imagen.src = imagenes[this.nombre]; //aqui enlace en nombre con la imagen
        //this.tipo = "tierra"; //esta seria una caracteristica generia
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br/>"); //br doy un salto de linea
        document.write("Vida: " + this.vida + "<br/>");
        document.write("Ataque: " + this.ataque + "<hr/>"); // hr adiciona una línea
        document.write("</p>");
    }
}