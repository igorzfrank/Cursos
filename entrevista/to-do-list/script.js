const openButtons = document.querySelectorAll(".openModal");
const closeModal = document.querySelector(".closeModal");
const confirmDelete = document.querySelector(".confirmDelete");
const modal = document.querySelector(".modal");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");

    confirmDelete.href = `delete.php?id=${id}`;
    modal.classList.add("is-active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

const editButtons = document.querySelectorAll(".openEdit");
const editModal = document.querySelector(".editModal");
const closeEditModal = document.querySelector(".closeEditModal");
const editTarefa = document.querySelector('.editModal input[name="tarefa"]');
const editTempo = document.querySelector('.editModal input[name="tempo"]');
const editPrioridade = document.querySelector(
  '.editModal input[name="prioridade"]'
);

editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");

    const tarefaRef = document.querySelector(`.tarefa[data-id='${id}']`);
    editTarefa.value = tarefaRef.innerText;

    const tempoRef = document.querySelector(`.tempo[data-id='${id}']`);
    const tempoNumero = tempoRef.textContent.match(/\d+/)[0];
    editTempo.value = tempoNumero;

    const prioridadeRef = document.querySelector(
      `.prioridade[data-id='${id}']`
    );
    const prioridadeNumero = prioridadeRef.textContent.match(/\d+/)[0];
    editPrioridade.value = prioridadeNumero;

    window.history.pushState(
      null,
      null,
      `http://localhost/entrevista/to-do-list/index.php?id=${id}`
    );
    editModal.classList.add("is-active");
  });
});

closeEditModal.addEventListener("click", () => {
  editModal.classList.remove("is-active");
});
