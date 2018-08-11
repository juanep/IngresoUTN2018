function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayor;
	var menor;

	numeroUno = prompt("ingrese número:");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("ingrese número:");
	numeroDos = parseInt(numeroDos);
	
	numeroTres = prompt("ingrese número:");
	numeroTres = parseInt(numeroTres);

	if(numeroUno > numeroDos && numeroUno > numeroTres)
	{
		mayor = numeroUno;
	}else
	{
		if(numeroDos > numeroUno && numeroDos > numeroTres)
		{
			mayor = numeroDos;
		}else
		{
			mayor = numeroTres;
		}
	}

	if(numeroUno < numeroDos && numeroUno < numeroTres)
	{
		menor = numeroUno;
	}else
	{
		if(numeroDos < numeroUno && numeroDos < numeroTres)
		{
			menor = numeroDos;
		}else
		{
			menor = numeroTres;
		}
	}

	alert("El mayor es: " + mayor);
	alert("El menor es: " + menor);
}
