function mostrar()
{
   let nacionalidad;
   let resultado;
   let edad;
   let cepa;
   let porcentajePositivos;
   let porcentajeNegativos;
   let contPositivos = 0;
   let contNegativos = 0;
   let contResultado = 0;
   let contAlfa = 0;
   let contBeta = 0;
   let contDelta = 0;
   let cepaAbunda;
   let flag = 1;
   let edadContagiado;
   let argentinosConDelta = 0;

   for(let i = 0; i < 8; i++){

    nacionalidad = prompt("Ingrese nacionalidad: (argentina - extranjera)").toLowerCase();
    while(nacionalidad != "argentina" && nacionalidad != "extranjera"){
        nacionalidad = prompt("Error. Ingrese nacionalidad: (argentina - extranjera)").toLowerCase();
    }

    resultado = prompt("Ingrese resultado (positivo - negativo)").toLowerCase();
    while(resultado != "positivo" && resultado != "negativo") {
        resultado = prompt("Error. Reingrese resultado (positivo - negativo)").toLowerCase();
    }

    edad = parseInt(prompt("Ingrese la edad (18 - 65)"));
    while(isNaN(edad) || edad < 18 || edad > 65){
        edad = parseInt(prompt("Error. Reingrese la edad (18-65)"));
    }

    if(resultado == "negativo") {
        cepa = prompt("Ingrese el tipo de cepa (delta - alfa - beta - ninguna)");
        while(cepa != "ninguna") {
            cepa = prompt("Error. Ingrese el tipo de cepa deberia ser ninguna");
        }
    } else {
        cepa = prompt("Ingrese el tipo de cepa (delta - alfa - beta - ninguna)");
        while (cepa != "delta" && cepa != "alfa" && cepa != "beta"){
            cepa = prompt("Error. Ingrese el tipo de cepa (delta - alfa - beta)");
        }
    }
    contResultado ++;

    if(resultado == "positivo"){
        contPositivos ++;
    } else {
        contNegativos ++;
    }

    if(cepa == "alfa"){
        contAlfa ++;
    } else if (cepa == "beta"){
        contBeta ++;
    } else {
        contDelta ++;
    }

    if(nacionalidad == "extranjera"){
        if(flag || edad > edadContagiado){
            edadContagiado = edad;
            flag = 0;
        }
    } else {
        if (cepa == "delta"){
            argentinosConDelta ++;
        }
    }

   }//fin del for

   porcentajePositivos = contPositivos * 100 / contResultado;
   porcentajePositivos = porcentajePositivos.toFixed(1);
   porcentajeNegativos = contNegativos * 100 / contResultado;
   porcentajeNegativos = porcentajeNegativos.toFixed(1);

   if (contAlfa > contBeta && contAlfa > contDelta){
       cepaAbunda = "Alfa";
   } else if (contBeta >= contAlfa && contBeta > contDelta){
       cepaAbunda = "Beta";
   } else {
       cepaAbunda = "Delta";
   }


   document.write("a. Porcentaje de casos positivos: " + porcentajePositivos + "%. <br>");
   document.write("b. Porcentaje de casos negativos: " + porcentajeNegativos + "%. <br>");
   document.write("c. La cepa mas encontrada es: " + cepaAbunda + "<br>");
   document.write("d. Edad del mayor extranjero contagiado: " + edadContagiado + " años. <br>");
   document.write("e. Cantidad de personas argentina contagiadas con la delta: " + argentinosConDelta + "<br>");



} // fin de la funcion
