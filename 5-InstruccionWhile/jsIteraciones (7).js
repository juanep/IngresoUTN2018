function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta ='si';
    var numero;
	var promedio;

	while(respuesta == 'si'){
		numero = parseInt(prompt("Ingrese un número: "));
		acumulador = acumulador + numero;
		contador+= 1;
		respuesta = prompt("¿Desea ingresar otro número?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN