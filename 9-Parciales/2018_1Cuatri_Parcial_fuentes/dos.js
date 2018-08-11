function mostrar()
{
	var edad;
	var nombre;
	var apellido;
	var localidad;
	
	edad = prompt("ingrese su edad: ");
	edad = parseInt(edad);

	nombre = prompt("ingrese su nombre: ");
	apellido = prompt("ingrese su apellido: ")
	
	localidad = prompt("ingrese su localidad: ");
	
	alert("ud es " + nombre + " " + apellido + "; tiene " + edad + " años de edad y vive en " + localidad);
}
