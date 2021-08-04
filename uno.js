
function mostrar()
{
	let continuar; 
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let promedio;
	let acumEdadRusa = 0;
	let contRusa = 0;
	let nombreMujerMayor;
	let vacunaMujerMayor;
	let edadMujerMayor;
	let flag = 1;
	let contAmericana = 0;
	let contAmericanaAdul =0;
	let porcentaje;
	let porcentajeDosis;
	let contVacunados = 0;
	let contVacunadosDos = 0;
	let contChina = 0;
	let vacunaMenosInoculada;

	do {
		nombre = prompt("Ingrese el nombre de la persona vacunada").toUpperCase();
		while(nombre.length < 3 || nombre.length > 10) {
			nombre = prompt("Informacion invalida. Reingrese el nombre de la persona vacunada").toUpperCase();
		}

		edad = parseInt(prompt("Ingrese la edad: (mayor o igual a 12)"));
		while(isNaN(edad) || edad < 12){
			edad = parseInt(prompt("Edad invalida. Reingrese la edad: (mayor o igual a 12)"));
		}
		if(edad >= 12 && edad <= 17){
			vacuna = prompt("Ingrese el tipo de vacuna, entre 12 y 17, solo americana").toLowerCase();
			while(vacuna != "americana") {
				vacuna = prompt("Informacion invalida. Ingrese el tipo de vacuna, entre 12 y 17, solo americana").toLowerCase();

			}
		} else {
			vacuna = prompt("Ingrese el tipo de vacuna administrada (rusa, china, americana)").toLowerCase();
			while(vacuna != "rusa" && vacuna != "china" && vacuna != "americana"){
				vacuna = prompt("Error. Reingrese el tipo de vacuna administrada (rusa, china, americana)").toLowerCase();
			}
		}

		dosis = prompt("Ingrese “p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis").toLowerCase();
		while(dosis != 'p' && dosis != 's'){
			dosis = prompt("Error. Ingrese “p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis").toLowerCase();
		}

		sexo = prompt("Ingrese el sexo (f - m)").toLowerCase();
		while(sexo != 'f' && sexo != 'm') {
			sexo = prompt("Error. Ingrese el sexo (f - m)").toLowerCase();
		}

		if(vacuna == "rusa"){
			acumEdadRusa += edad;
			contRusa++;
		} else if (vacuna == "americana") {
			contAmericana ++;
			if (edad > 17){
				contAmericanaAdul ++;
			}
		} else {
			contChina++;
		}

		if(sexo == "f"){
			if (flag || edad > edadMujerMayor) {
				edadMujerMayor = edad;
				nombreMujerMayor = nombre;
				vacunaMujerMayor = vacuna;
				flag = 0;
			}
		}
		
		contVacunados ++;
		if(dosis == "s"){
			contVacunadosDos ++;
		}

		continuar = prompt("Quiere continuar ingresando datos? (si / no)");
	} while (continuar == "si");

	if (contRusa == 0){
		promedio = 0
	} else {
		promedio = acumEdadRusa / contRusa; //a
	}
	
	if(contAmericana == 0) {
		porcentaje = 0; 
	} else {
	porcentaje = contAmericanaAdul * 100 / contAmericana; //c
	porcentaje = porcentaje.toFixed(1);
	}


	porcentajeDosis = contVacunadosDos * 100 / contVacunados; //d
	porcentajeDosis = porcentajeDosis.toFixed(1);

	if(contChina < contRusa && contChina < contAmericana){
		vacunaMenosInoculada = "China";
	} else if(contRusa <= contChina && contRusa < contAmericana){
		vacunaMenosInoculada = "Rusa";
	} else {
		vacunaMenosInoculada = "Americana";
	}

	document.write("a. El promedio de edad de los que se vacunaron con la vacuna rusa: " + promedio + " años. <br>");
	document.write("b. Nombre de la mujer con mas edad: " + nombreMujerMayor + ", con la vacuna: " + vacunaMujerMayor + "<br>");
	document.write("c. De las personas que recibieron la vacuna americana, el " + porcentaje + "% es mayor de edad. <br>")
	document.write("d. Porcentaje de los que estan vacunados con 2 dosis: " + porcentajeDosis + "% del total de vacunados. <br>");
	document.write("e. La vacuna menos inoculada es: " + vacunaMenosInoculada);

} // fin de la funcion
