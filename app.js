let num;
let secuencia = [0, 1];

while (true) {
  try {
    num = parseInt(
      prompt("Ingresa un numero para establecer la secuencia").trim()
    );

    if (!isNaN(num) || num >= 1) {
      for (let i = 0; i < num - 2; i++) {
        secuencia.push(secuencia[i] + secuencia[i + 1]);
      }
      alert(`La secuencia fibonacci de ${num} es: ${secuencia}`);

      break;
    } else {
      num = parseInt(prompt("Ingresa un numero valido").trim());
    }
  } catch (e) {
    num = parseInt(prompt("Ingresa un numero valido").trim());
  }
}
