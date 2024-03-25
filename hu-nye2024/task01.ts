function somaNumeros(elemento: any): number {
  // Se o elemento for um número, retorne seu valor
  if (typeof elemento === 'number') {
      return elemento;
  }
  // Se o elemento for uma array, aplique a função somaNumeros a cada elemento da array
  else if (Array.isArray(elemento)) {
      return elemento.reduce((acc, val) => acc + somaNumeros(val), 0);
  }
  // Se o elemento for um objeto, aplique a função somaNumeros a cada valor do objeto
  else if (typeof elemento === 'object' && elemento !== null) {
      return Object.values(elemento).reduce((acc, val) => acc + somaNumeros(val), 0);
  }
  // Caso contrário, retorne 0, pois não estamos interessados nesse tipo de elemento
  else {
      return 0;
  }
}

const entrada: any[] = [1, 2, 3, [[[4], 5], [["6"]], { obj: 10 }]];

// Chame a função somaNumeros com a entrada fornecida e imprima o resultado
console.log(somaNumeros(entrada)); // Saída: 15
