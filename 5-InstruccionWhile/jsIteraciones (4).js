function Mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 9 inclusive.");

	while(!(numero >0 && numero <10)){
    numero = prompt("Número inválido. Ingrese un número entre 0 y 9 inclusive.")
	}
    document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN