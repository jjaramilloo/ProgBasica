//alert ("dame un empleo");
var numeros = 100;
for (var i=1; i <= 100; i++)
{
    if (i % 3 == 0)
    {
        document.write("fizz" + "<br />")
    }
    if (i % 5 == 0)
    {
        document.write("buzz" + "<br />")
    }
    else
    {
        document.write(i + "<br />")
    }

    //document.write(i + "<br />");
}