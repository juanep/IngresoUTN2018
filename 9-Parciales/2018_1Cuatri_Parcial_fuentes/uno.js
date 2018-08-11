
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var pintura;

	largo = parseInt(prompt("ingrese el largo: "));
	ancho = parseInt(prompt("ingrese el ancho: "));

	perimetro = (largo + ancho)* 2;
	pintura = perimetro / 3;
	
	alert("Perímetro = " + perimetro);
	alert("Cantidad de pintura (en litros) = " + pintura);
}
