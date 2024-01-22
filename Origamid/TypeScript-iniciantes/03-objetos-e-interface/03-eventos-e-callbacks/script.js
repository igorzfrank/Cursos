"use strict";
// const button = document.querySelector("button");
// function handleClick(event: PointerEvent) {
//   console.log(event);
// }
// button?.addEventListener("pointerdown", handleClick);
// function handleScroll(event: Event) {
//   console.log(event);
// }
// window.addEventListener("scroll", handleScroll);
// function ativarMenu(event: Event) {
//   if (event instanceof MouseEvent) {
//     console.log(event.pageX);
//   }
//   if (event instanceof TouchEvent) {
//     console.log(event.touches[0].pageX);
//   }
// }
// document.documentElement.addEventListener('mousedown', ativarMenu);
// document.documentElement.addEventListener('touchstart', ativarMenu);
// window.addEventListener("keydown", ativarMenu)
const button = document.querySelector("button");
// function handleClick(this: HTMLButtonElement, event: MouseEvent){
//     console.log(event)
// }
function handleClick(event) {
    if (event.currentTarget instanceof HTMLElement) {
        console.log(event.currentTarget.innerText);
    }
}
button?.addEventListener("click", handleClick);
// Atividade
const btnMenu = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");
// function toggleMenu(event: PointerEvent) {
//   const nav = document.getElementById("nav");
//   const button = event.currentTarget;
//   if (button instanceof HTMLElement && nav) {
//     const active = nav.classList.contains("active");
//     if (active) {
//       nav.classList.add("active");
//       button.ariaLabel = "Fechar Menu";
//       button.ariaExpanded = "true";
//     } else {
//       nav.classList.remove("active");
//       button.ariaLabel = "Abrir Menu";
//       button.ariaExpanded = "false";
//     }
//   }
// }
function toggleMenu() {
    if (btnMenu && nav) {
        if (nav.classList.contains("active")) {
            nav.classList.remove("active");
            btnMenu.ariaLabel = "Abrir Menu";
            btnMenu.ariaExpanded = "false";
        }
        else {
            nav.classList.add("active");
            btnMenu.ariaLabel = "Fechar Menu";
            btnMenu.ariaExpanded = "true";
        }
    }
}
btnMenu?.addEventListener("pointerdown", toggleMenu);
