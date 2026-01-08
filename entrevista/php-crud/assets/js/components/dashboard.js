export function initDashboard() {
  const tarefas = document.querySelectorAll(".tarefa");

  tarefas.forEach((tarefa) => {
    tarefa.addEventListener("click", () => {
      const id = tarefa.getAttribute("data-id");
      const edit = document.querySelector(`.tarefa[data-id='${id}'] .edit`);

      tarefa.classList.toggle("is-checked");
      edit.click();
    });
  });
}
