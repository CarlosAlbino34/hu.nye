interface Draw {
  [key: string]: number;
}

interface Game {
  id: number;
  draws: Draw[];
}

function calcularPoderTotal(jogos: Game[]): Number {
  let poderTotal = 0;

  for (const jogo of jogos) {
      let menorNumeroCubos: Draw | null = null;

      // Encontra o menor número de dados de cada cor necessário para cada rodada
      for (const draw of jogo.draws) {
          if (!menorNumeroCubos) {
              menorNumeroCubos = { ...draw };
          } else {
              for (const cor in draw) {
                  if (draw.hasOwnProperty(cor)) {
                      menorNumeroCubos[cor] = Math.min(menorNumeroCubos[cor] || Infinity, draw[cor]);
                  }
              }
          }
      }
    }
  }
