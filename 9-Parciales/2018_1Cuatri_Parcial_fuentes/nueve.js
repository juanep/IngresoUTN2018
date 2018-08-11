function mostrar()
{
	var nombre;
	var sexo;
	var estadoCivil;
	var cantidad;
	var importeTotal;
	var respuesta;
	var mayorCantidad;
	var banderaYaPaso;
	var banderaSoltero;
	var masGasto;
	var menosGasto;
	var masGastoSexo;
	var menosGastoSexo;
	var primerMujerImporte;
	var primerMujerNombre;
	var primerMujerBandera;
	var cantidadViudos;
	var acumuladorViudos;

	respuesta = "n";
	banderaYaPaso = "no";
	banderaSoltero = "no";
	primerMujerBandera = 0;
	cantidadViudos = 0;
	acumuladorViudos = 0;
	while(respuesta != "n")
	{
		nombre = prompt("Ingrese nombre:");
		sexo = prompt("Ingrese sexo:");
		while(sexo != "f" || sexo != "m")
		{
			sexo = prompt("Error. Reingrese sexo:");
		}
		estadoCivil = prompt("ingrese estadoCivil:");
		while(estadoCivil != "soltero" || estadoCivil != "casado" || estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error. Reingrese estadoCivil:");
		}
		cantidad = prompt("ingrese cantidad:");
		cantidad = parseInt(cantidad);
		while(cantidad < 0 || isNaN(cantidad))
		{
			cantidad = prompt("Error. Reingrese cantidad:");
			cantidad = parseInt(cantidad);
		}
		importeTotal = prompt("ingrese importeTotal:");
		importeTotal = parseInt(importeTotal);
		while(importeTotal < 0 || isNaN(importeTotal))
		{
			importeTotal = prompt("Error. Reingrese importeTotal:");
			importeTotal = parseInt(importeTotal);
		}
	}

	if(banderaYaPaso == "no")
	{
		banderaYaPaso = "si";
		mayorCantidad = cantidad;
		mayorCantidadNombre = nombre;
	}else
	{
		if(cantidad > mayorCantidad)
		{
			mayorCantidad = cantidad;
			mayorCantidadNombre = nombre;
		}
	if(estadoCivil == "soltero")
	{
		if(banderaSoltero == "no")
		{
			banderaSoltero = "si";
			masGasto = importeTotal;
			menosGasto = importeTotal;
			masGastoSexo = sexo;
			menosGastoSexo = sexo;
		}else
		{
			if(importeTotal > masGasto)
			{
				masGasto = importeTotal;
				masGastoSexo = sexo;
			}
			if(importeTotal < menosGasto)
			{
				menosGasto = importeTotal;
				menosGastoSexo = sexo;
			}
		}
	}
		if(sexo == "f" && primerMujerBandera == 0)
		{
			primerMujerNombre = nombre;
			primerMujerImporte = importeTotal;
		}
		if(estadoCivil == "viudo")
		{
			cantidadViudos++;
			acumuladorViudos = acumuladorViudos + importeTotal;
		}
	}

	promedioTotal = cantidadViudos / acumuladorViudos;

}
