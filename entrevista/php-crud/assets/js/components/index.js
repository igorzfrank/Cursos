export function initIndex() {
  const btn = document.querySelector(".home .btn-dashed");
  const modal = document.querySelector(".home .modal");
  const closeModal = document.querySelector(".home .closeModal");

  btn.addEventListener("click", () => {
    modal.classList.add("is-active");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
}
