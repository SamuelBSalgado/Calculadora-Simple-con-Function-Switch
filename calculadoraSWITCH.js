function hacerOperacion(Operacion) {
    let decision = Operacion;
    let primerNumero = parseInt(document.getElementById("numero1").value);
    let segundoNumero = parseInt(document.getElementById("numero2").value);
    let resultado;

    switch(decision){
        case 1:
            resultado = primerNumero + segundoNumero;
            if (isNaN(resultado)) {
                document.getElementById("resultadoSuma").innerHTML = "Syntax Error";
                break;
            } else{
            document.getElementById("resultadoSuma").innerHTML = resultado;
                break;
            }
        case 2:
            resultado = primerNumero - segundoNumero;
            if (isNaN(resultado)) {
                document.getElementById("resultadoResta").innerHTML = "Syntax Error";
                break;
            } else{
            document.getElementById("resultadoResta").innerHTML = resultado;
                break;
            }
        case 3:
            resultado = primerNumero * segundoNumero;
            if (isNaN(resultado)) {
                document.getElementById("resultadoMultiplicacion").innerHTML = "Syntax Error";
                break;
            } else{
            document.getElementById("resultadoMultiplicacion").innerHTML = resultado;
                break;
            }
        case 4:
            resultado = primerNumero / segundoNumero;
            if (isNaN(resultado)) {
                document.getElementById("resultadoDivision").innerHTML = "Syntax Error";
                break;
            } else{
                document.getElementById("resultadoDivision").innerHTML = resultado;
                break;
            }
            break;
        case 5:
            document.getElementById("formulario").reset();
    }
}