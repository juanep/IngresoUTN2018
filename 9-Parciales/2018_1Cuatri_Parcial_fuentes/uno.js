
function mostrar()
{
    var ancho;
    var largo;
    var perímetro;

    ancho = parseInt(prompt("Ingrese el ancho:"));

    largo = parseInt(prompt("ingrese el largo:"));

    perímetro = 2 * (ancho + largo);

    alert("El perímetro es: " + perímetro);

}
