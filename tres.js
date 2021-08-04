function mostrar()
{
	let origen;
	let cantidad;
	let costo;
	let origenMasVacunas;
	let acumVacunasAsia = 0;
	let acumVacunasUsa = 0;
	let acumVacunasEuropa = 0;
	let contAsia = 0;
	let costoTotal = 0;
	let importeFinal;
	let cantidadTotal = 0;

	for(let i = 0; i < 10; i ++){
		origen = prompt("Ingrese el origen del vuelo: (Asia - Europa - USA)").toUpperCase();
		while(origen != "ASIA" && origen != "EUROPA" && origen != "USA") {
			origen = prompt("Error. Reingrese el origen del vuelo: (Asia - Europa - USA)").toUpperCase();
		}

		cantidad = parseInt(prompt("Ingrese cantidad de vacunas"));
		while(isNaN(cantidad) || cantidad < 1){
			cantidad = parseInt(prompt("Error. Reingrese cantidad de vacunas"));
		}

		costo = parseInt(prompt("Ingrese el costo del vuelo (sin puntos y debe estar entre 1000000-5000000)"));
		while(isNaN(costo) || costo < 1000000 || costo > 5000000){
			costo = parseInt(prompt("Error.Reingrese el costo del vuelo (sin puntos)"));
		}

		if (origen == "ASIA"){
			acumVacunasAsia += cantidad;
			contAsia ++;
		} else if (origen == "EUROPA"){
			acumVacunasEuropa += cantidad;
		} else {
			acumVacunasUsa += cantidad;
		}
	
		costoTotal += costo;
		cantidadTotal += cantidad;


	} // fin del for

	if (acumVacunasAsia > acumVacunasEuropa && acumVacunasAsia > acumVacunasUsa){
		origenMasVacunas = "Asia";
	} else if (acumVacunasEuropa >=acumVacunasAsia && acumVacunasEuropa > acumVacunasUsa) {
		origenMasVacunas = "Europa";
	} else {
		origenMasVacunas = "USA"
	}

	promedio = acumVacunasAsia / contAsia;

	if(cantidadTotal > 4000000){
		descuento = costoTotal * 30 / 100;
	} else if (cantidadTotal > 2000000 && cantidadTotal < 4000000) {
		descuento = costoTotal * 20 / 100;
	} else {
		descuento = 0;
	}

	importeFinal = costoTotal - descuento;

	document.write("a. El origen que envio mayor cantidad de vacunas es: " + origenMasVacunas + "<br>");
	document.write("b. El promedio de vacunas llegadas a Asia es: " + promedio + "<br>");
	document.write("c. El total a pagar sin descuento por los gastos de viaje es: $ " + costoTotal + "<br>");
	if(descuento == 0){
		document.write("d. No se aplicaron descuentos");
	} else {
		document.write("d. El descuento realizado fue: " + descuento + ", por lo tanto el importe final con descuento es: $" + importeFinal + "<br>");
	}

}// fin de la funcion

