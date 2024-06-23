let num;
let secuencia = [0, 1];

while (isNaN(num) || num <= 1) {
  num = parseInt(
    prompt("Ingresa un numero para establecer la secuencia").trim()
  );
  for (let i = 0; i < num - 2; i++) {
    secuencia.push(secuencia[i] + secuencia[i + 1]);
  }
  alert(`La secuencia Fibonacci de ${num} es: ${secuencia}`);
}
