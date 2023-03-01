//1
alert("un mensaje");

//2
document.write("Hello World<br>");

//3
document.write(3 + 5 + "<br>");

//4
let nombre = prompt("Por favor, ingrese su nombre de usuario:");
alert("Hola nombreUsuario");

//5
let n1 = prompt("Por favor, ingrese el primer número:");
let n2 = prompt("Por favor, ingrese el segundo número:");
let suma = parseInt(n1, 10) + parseInt(n2, 10); //el 10 es por la base decimal
alert("La suma de ambos numeros es " + suma);

//6
let numero1 = prompt("Por favor, ingrese el primer número:");
let numero2 = prompt("Por favor, ingrese el segundo número:");
if (numero1 > numero2) {
  document.write(numero1 + "<br>");
} else {
  document.write(numero2 + "<br>");
}

//7
let num1 = prompt("Por favor, ingrese el primer número:");
let num2 = prompt("Por favor, ingrese el segundo número:");
let num3 = prompt("Por favor, ingrese el tercer número:");
if (num1 > num2 && num1 > num3) {
  document.write(num1 + "<br>");
} else if (num2 > num1 && num2 > num3) {
  document.write(num2 + "<br>");
} else {
  document.write(num3 + "<br>");
}

//8
let n = prompt("Por favor, ingrese un número:");
if (n % 2 == 0) {
  document.write("El numero " + n + " es divisible en 2.<br>");
} else {
  document.write("El numero " + n + " NO es divisible en 2.<br>");
}

//9
let frase = prompt("Por favor, ingrese una frase:");
for (i = 0; i < frase.length; i++) {
  if (
    frase.charAt(i) == "a" ||
    frase.charAt(i) == "e" ||
    frase.charAt(i) == "i" ||
    frase.charAt(i) == "o" ||
    frase.charAt(i) == "u"
  ) {
    document.write(
      "En el subindice " +
        i +
        " esta la vocal " +
        "'" +
        frase.charAt(i) +
        "'" +
        ".<br>"
    );
  }
}
//10
let nu = prompt("Por favor, ingrese un número:");
if (nu % 2 == 0) {
  document.write("El numero " + nu + " es divisible en 2.<br>");
} else if (nu % 3 == 0) {
  document.write("El numero " + nu + " es divisible en 3.<br>");
} else if (nu % 5 == 0) {
  document.write("El numero " + nu + " es divisible en 5.<br>");
} else if (nu % 7 == 0) {
  document.write("El numero " + nu + " es divisible en 7.<br>");
} else {
  document.write("El numero " + nu + " no es divisible en 2, 3, 5 o 7.<br>");
}

//11
let nume = prompt("Por favor, ingrese un número:");
let b = 0;
if (nume % 2 == 0) {
  document.write("El numero " + nume + " es divisible en 2.<br>");
  b = 1;
}
if (nume % 3 == 0) {
  document.write("El numero " + nume + " es divisible en 3.<br>");
  b = 1;
}
if (nume % 5 == 0) {
  document.write("El numero " + nume + " es divisible en 5.<br>");
  b = 1;
}
if (nume % 7 == 0) {
  document.write("El numero " + nume + " es divisible en 7.<br>");
  b = 1;
}
if (b == 0) {
  document.write("El numero " + nume + " no es divisible en 2, 3, 5 o 7.<br>");
}
