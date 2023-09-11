import initScrollSuave from "./modules/scroll-suave.js";
import iniAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import { teste1, teste2, senha } from "./modules/teste.js";
import * as testeGeral from "./modules/testeGeral.js"

console.log(testeGeral)

testeGeral.testeGeral1();
testeGeral.testeGeral2();
console.log(testeGeral.senhaGeral)

teste1();
teste2();

console.log(senha)

initTabNav();
initAccordion();
initScrollSuave();
iniAnimacaoScroll();
