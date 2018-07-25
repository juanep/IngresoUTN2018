function Mostrar()
{

	var contador=1;
	var acumulador=0;
    var numero;
	var promedio;

	while(contador <=5){
		numero = parseInt(prompt("Ingrese un número: "));
		acumulador = acumulador + numero;
		contador+= 1;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN