function suma(n1, n2) {
  n1 + n2;
  return n1 + n2;
}

function resta(n1, n2) {
  n1 - n2;
  return n1 - n2;
}

function multiplicacion(n1, n2) {
  n1 * n2;
  return n1 * n2;
}

function division(n1, n2) {
  if (n2 === 0) {
    return "No se puede dividir por 0";
  }
  return n1 / n2;
}

const args = process.argv.slice(2);

if (args.length !==3) {
  console.log(
    "EROOR ,La forma correcta de escribirlo es [Numero] [operacion] [ Numero]"
  );
  process.exit(1);
}
const numero1 = parseFloat(args[0]);
const operacion = args[1];
const numero2 = parseFloat(args[2]);

if (isNaN(numero1) || isNaN(numero2)) {
  console.log("solo deven ser numeros");
  process.exit(1);
}

let resultado;
switch (operacion) {
  case "+":
    resultado = suma(numero1, numero2);
    break;

  case "-":
    resultado = resta(numero1, numero2);
    break;

  case "*":
    resultado = multiplicacion(numero1, numero2);
    break;

  case "/":
    resultado = division(numero1, numero2);
    break;
    default:
        console.log('Error: Operación no válida. Usa +, -, * o /.');
        process.exit(1);
}

console.log( "Resultado de la operacion", resultado)