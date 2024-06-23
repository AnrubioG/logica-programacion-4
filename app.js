let num;
let resultado = 0;
let a = 0;
let b = 1;
let secuencia = [];

while (isNaN(num) || num <= 0) {
  num = parseInt(
    prompt("Ingresa un numero para establecer la secuencia").trim()
  );

  for (let i = 1; i < num; i++) {
    secuencia.push(resultado);
    resultado = a + b;
    a = b;
    b = resultado;
    console.log(secuencia);
  }
}
