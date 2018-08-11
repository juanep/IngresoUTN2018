function mostrar()
{
	var nombre;
	var ancho;
	var altura;
	var peso;
	var pesoMasPesado;
	var alturaMasAlta;
	var menorAncho;
	var cantidadDePeso300e600;
	var contador;

	contador = 0;
	cantidadDePeso300e600 = 0;

	while(contador < 5)
	{
		contador++;

		nombre = prompt("Ingrese nombre:");

		ancho = prompt("Ingrese ancho:");
		ancho = parseInt(ancho);
			while(ancho < 0 || ancho > 10)
			{
				ancho = prompt("Error! Reingrese ancho:");
				ancho = parseInt(ancho);
			}

		altura = prompt("Ingrese altura:");
		altura = parseInt(altura);
			while(altura < 0 || altura > 10)
			{
				altura = prompt("Error! Reingrese altura:");
				altura = parseInt(altura);
			}

		peso = prompt("Ingrese el peso:");
		peso = parseInt(peso);
			while(peso < 0 || peso > 1000)
			{
				peso = prompt("Error. Reingrese el peso:");
				peso = parseInt(peso);
			}
	}

	if(contador == 1)
	{
		pesoMasPesado = peso;
		alturaMasAlta = altura;
		menorAncho = ancho;
	}else
	{
		if(altura > alturaMasAlta)
		{
			alturaMasAlta = altura;
		}
		if(ancho > menorAncho)
		{
			menorAncho = ancho;
		}
		if(peso > pesoMasPesado)
		{
			pesoMasPesado = peso;
		}
	}

	if(peso < 300 || peso > 600)
	{
		cantidadDePeso300e600++;
	}

	document.write("Peso más pesado = " + pesoMasPesado);
	document.write("Altura más alta = " + alturaMasAlta);
	document.write("Menor ancho = " + menorAncho);
	document.write("Cantidad de peso entre 300 y 600 = " + cantidadDePeso300e600);
	
}
