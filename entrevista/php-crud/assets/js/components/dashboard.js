export function initDashboard() {
  const tarefas = document.querySelectorAll(".tarefa");

  tarefas.forEach((tarefa) => {
    tarefa.addEventListener("click", () => {
      const id = tarefa.getAttribute("data-id");
      tarefa.classList.toggle("is-checked");

      const link = document.createElement("a");
      link.href = `../config/edit.php?id=${id}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  });
}
