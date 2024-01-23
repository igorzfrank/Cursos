function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}
somar(3, 4);
somar(3, 4, 1);

const subtrair = (a: number, b: number): number => a - b;

subtrair(10, 2);

type Callback = (event: MouseEvent) => void;

function pintarTela(cor: string): void {
  document.body.style.background = cor;
}

pintarTela("Black");

const btn = document.querySelector("button");

btn?.click();

function isString(value: any) {
  if (typeof value === "string") {
    return true;
  }
}

console.log(isString("Teste"));
console.log(isString(200));

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

// abortar("Um erro ocorreu");
// console.log("Tente novamente");

interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {
  forma.perimetro(3);
}

function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

normalizar(" Produto ");
normalizar(["Banana ", " UVA"]);

function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: "div"): HTMLDivElement | null;
function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$("a")?.href;
$("video")?.volume;
$(".teste")?.innerHTML;

//Atividade
function roundUp(n: number): number;
function roundUp(n: string): string;
function roundUp(n: string | number): string | number {
  if (typeof n === "number") {
    return Math.ceil(n);
  } else {
    return String(Math.ceil(Number(n)))
  }
}

console.log(roundUp(200.4))
console.log(roundUp("200.5"))

