const openButtons = document.querySelectorAll(".openModal");
const closeModal = document.querySelector(".closeModal");
const confirmDelete = document.getElementById("confirmDelete");
const modal = document.querySelector(".modal");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");

    confirmDelete.href = `excluir.php?id=${id}`;
    modal.classList.add("is-active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("is-active");
});
