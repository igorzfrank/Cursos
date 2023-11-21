function perimetroForma(lado, totalLados) {
  totalLados = totalLados || 4; // se não for definido, será igual à 4
  return lado * totalLados;
}

perimetroForma(10, 3); // 30
perimetroForma(10); // 40

function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou.");
  });
}

anunciarGanhadores("Pedro", "Marta", "Maria");
