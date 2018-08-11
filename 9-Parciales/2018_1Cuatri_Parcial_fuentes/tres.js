function mostrar()
{
	var importe = parseInt(prompt("ingrese el importe del producto: "));
	var nombre = prompt("ingrese el nombre del producto: ");
	var cantidad = parseInt(prompt("ingrese la cantidad deseada: "));
	var total;
	var precioConIva;

	total = cantidad * importe;
	precioConIva = total * 1.21;

	alert("compró la cantidad " + cantidad + " del producto " + nombre + " a un precio de " + importe + " pagando el precio de " + precioConIva + " con iva incluido.");
}
