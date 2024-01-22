const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, "Taxas", 40, "Produto", 3, 30];

// function maiorQue10(data: number[]) {
//   return data.filter((n) => n > 10);
// }

function maiorQue10(data: Array<number>) {
  return data.filter((n) => n > 10);
}
maiorQue10(numeros);

function filtrarValores(data: (string | number)[]) {
  return data.filter((item) => typeof item === "number");
}

filtrarValores(valores);

const dados: (string | number)[][] = [
  ["senhor dos aneis", 80],
  ["a guerra dos tronos", 120],
];

interface Curso {
  nome: string;
  nivel: "iniciante" | "avancado";
  aulas: number;
  horas: number;
  gratuito: boolean;
  idAulas: Array<number>;
  tags: Array<string>;
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  console.log(data);
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Array<Curso>) {
  cursos.forEach((item) => {
    let color;

    if (item.nivel === "iniciante") {
      color = "blue";
    } else {
      color = "red";
    }
    document.body.innerHTML += `
    <div>
        <h1 style="color: ${color}">${item.nome}</h1>
        <p>Curso com ${item.aulas} aulas, no total de ${
      item.horas
    } horas de aula</p>
        <p>Nivel ${item.nivel}</p>
        <p>Gratuito? ${item.gratuito ? "Sim" : "Não"}</p>
        <p>Tags: ${item.tags.join(", ")}</p>
        <p>Aulas: ${item.idAulas.join(" | ")}</p>
    </div>
    `;
  });
}
