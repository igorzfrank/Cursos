/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"ativo\";\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  // adiciona os eventos ao accordion\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\n    });\n  }\n\n  // iniciar função\n  init() {\n    if (this.accordionList.length) {\n      // ativar primeiro item\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observerTarget, observerClass) {\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerTarget = document.querySelector(observerTarget);\n    this.observerClass = observerClass;\n\n    // bind o this do objeto ao callback da mutação\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  // recebe um element do dom, com número em seu texto\n  // incrementa a partir de 0 até o número final\n  static incrementarNumero(numero) {\n    const total = +numero.innerText;\n    const incremento = Math.floor(total / 100);\n    let start = 0;\n\n    const timer = setInterval(() => {\n      start += incremento;\n      numero.innerText = start;\n      if (start > total) {\n        clearInterval(timer);\n        numero.innerText = total;\n      }\n    }, 25 * Math.random());\n  }\n\n  // ativa incrementar número para cada\n  // número selecionado do dom\n  animaNumeros() {\n    this.numeros.forEach((numero) => {\n      this.constructor.incrementarNumero(numero);\n    });\n  }\n\n  // função que ocorro quando a mutação ocorrer\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(this.observerClass)) {\n      this.observer.disconnect();\n      this.animaNumeros();\n    }\n  }\n\n  // adiciona o MutationObserver para verificar\n  // quando a classe ativo é adicionado ao element target\n  addMutationObserver() {\n    this.observer = new MutationObserver(this.handleMutation);\n    this.observer.observe(this.observerTarget, { attributes: true });\n  }\n\n  init() {\n    if (this.numeros.length && this.observerTarget) {\n      this.addMutationObserver();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initDropDownMenu() {\n  const dropDownMenus = document.querySelectorAll(\"[data-dropdown]\");\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add(\"active\");\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], () => {\n      this.classList.remove(\"active\");\n    });\n  }\n\n  dropDownMenus.forEach((menu) => {\n    [\"touchstart\", \"click\"].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais() {\n  function createAnimal(animal) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n\n    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;\n\n    return div;\n  }\n\n  async function fetchAnimais(url) {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n      const numerosGrid = document.querySelector(\".numeros-grid\");\n\n      animaisJSON.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n\n        numerosGrid.appendChild(divAnimal);\n      });\n\n      const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-numero]\", \".numeros\", 'ativo');\n      animaNumeros.init();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n\n  fetchAnimais(\"./animais-api.json\");\n}\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {}\n\nfetch(\"https://blockchain.info/ticker\")\n  .then((response) => response.json())\n  .then((json) => {\n    const btcPreco = document.querySelector(\".btc-preco\");\n    btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);\n  })\n  .catch((error) => {\n    console.log(Error(error));\n  });\n\n// https://blockchain.info/ticker\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n\n  console.log(diasSemana);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n\n  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\n// const agora = new Date();\n// const futuro = new Date(\"Dec 24 2025 23:55\");\n\n// console.log(agora);\n// console.log(futuro);\n\n// function transformarDias(tempo) {\n//   return tempo / (24 * 60 * 60 * 1000);\n// }\n\n// const diasAgora = transformarDias(agora.getTime());\n// const diasFuturo = transformarDias(futuro.getTime());\n\n// console.log(diasFuturo - diasAgora);\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initMenuMobile() {}\n\nconst menuButton = document.querySelector('[data-menu=\"button\"]');\nconst menuList = document.querySelector('[data-menu=\"list\"]');\nconst eventos = [\"click\", \"touchstart\"];\n\nfunction openMenu() {\n  menuList.classList.add(\"active\");\n  menuButton.classList.add(\"active\");\n  (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n    menuList.classList.remove(\"active\");\n    menuButton.classList.remove(\"active\");\n  });\n}\n\neventos.forEach((evento) => {\n  menuButton.addEventListener(evento, openMenu);\n});\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(botaoAbrir, botaoFechar, containerModal) {\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n\n    // bind this ao callback para\n    // fazer referencia ao objeto\n    // da classe\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  }\n\n  // abre ou fecha o modal\n  toggleModal() {\n    this.containerModal.classList.toggle(\"ativo\");\n  }\n\n  // adiciona o evento de toogle no modal\n  eventToggleModal(event) {\n    event.preventDefault();\n    this.toggleModal();\n  }\n\n  // fecha o modal ao clicar do lado de fora\n  cliqueForaModal(event) {\n    if (event.target === this.containerModal) {\n      this.toggleModal();\n    }\n  }\n\n  // adiciona os eventos aos elementos do modal\n  addModalEvents() {\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\n    this.containerModal.addEventListener(\"click\", this.cliqueForaModal);\n  }\n\n  init() {\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n      this.addModalEvents();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = \"data-outside\";\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, \"\");\n  }\n}\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\n\n  const windowMetade = window.innerHeight * 0.6;\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) {\n        section.classList.add(\"ativo\");\n      } else if (section.classList.contains(\"ativo\")) {\n        section.classList.remove(\"ativo\");\n      }\n    });\n  }\n\n  if (sections.length) {\n    animaScroll();\n\n    window.addEventListener(\"scroll\", animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: \"smooth\", block: \"start\" };\n    } else {\n      this.options = options;\n    }\n\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute(\"href\");\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((links) => {\n      links.adEventListener(\"click\", this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = \"ativo\";\n  }\n\n  // ativa a tab de acordo com a index da mesma\n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove(this.activeClass);\n    });\n    this.tabContent[index].classList.add(\n      this.activeClass,\n      this.tabContent[index].dataset.anime,\n    ); // <-----\n  }\n\n  // adiciona os eventos nas tabs\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener(\"click\", () => {\n        this.activeTab(index);\n      });\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      // ativar primeiro item\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\n  constructor(tooltips) {\n    this.tooltips = document.querySelectorAll(tooltips);\n\n    // bind do objeto da classe aos callbacks\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseOver = this.onMouseOver.bind(this);\n  }\n\n  // move a tooltip com base nos seus estilos\n  // de acordo com a posição do mouse\n  onMouseMove(event) {\n    this.tooltipBox.style.top = `${event.pageY + 10}px`;\n    if (event.pageX + 240 > window.innerWidth) {\n      this.tooltipBox.style.left = `${event.pageX - 190}px`;\n    } else {\n      this.tooltipBox.style.left = `${event.pageX + 10}px`;\n    }\n  }\n\n  onMouseLeave(event) {\n    this.tooltipBox.remove();\n    event.currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave);\n    event.currentTarget.removeEventListener(\"mousemove\", this.onMouseMove);\n  }\n\n  // Cria a tooltipbox e coloca no body\n  criarTooltipBox(element) {\n    const tooltipBox = document.createElement(\"div\");\n    const text = element.getAttribute(\"arial-label\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    console.log(tooltipBox);\n    this.tooltipBox = tooltipBox;\n  }\n\n  // cria a tooltip e adiona os eventos de mouse move e mouse leave\n  // ao target\n  onMouseOver(event) {\n    // cria a tooltipbox e coloca em um propriedade\n    this.criarTooltipBox(event.currentTarget);\n\n    event.currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\n    event.currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave);\n  }\n\n  // adiciona os eventos de mouse over a cada tooltip\n  addTooltipEvent() {\n    this.tooltips.forEach((item) => {\n      item.addEventListener(\"mouseover\", this.onMouseOver);\n    });\n  }\n\n  init() {\n    if (this.tooltips.length) {\n      this.addTooltipEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\n\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-js='accordion'] dt\");\naccordion.init();\n\nconst tabNav = new _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-tab='menu'] li\", \"[data-tab='content'] section\");\ntabNav.init();\n\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\n\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"[data-tooltip]\");\ntooltip.init();\n\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://02-animais-eslint/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;