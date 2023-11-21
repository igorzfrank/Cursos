export default class ValidarCpf {
  constructor(element) {
    this.element = element;
  }

  limpar(cpf) {
    return cpf.replace(/\D/g, "");
  }

  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  }

  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    // console.log(cpf);
    // console.log(matchCpf);
    return matchCpf && matchCpf[0] === cpf;
  }

  validarNaMudanca(cpfElement) {
    if (this.validar(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value);
      cpfElement.classList.add("valid");
      cpfElement.classList.remove("error");
      cpfElement.nextElementSibling.classList.remove("active");
    } else {
      cpfElement.classList.add("error");
      cpfElement.classList.remove("valid");
      cpfElement.nextElementSibling.classList.add("active");
    }
  }

  adcionarEvento() {
    this.element.addEventListener("change", () => {
      this.validarNaMudanca(this.element);
    });
  }

  adicionarErroSpan() {
    const errorElement = document.createElement("span");
    errorElement.classList.add("error-text");
    errorElement.innerText = "CPF Inválido";
    this.element.parentElement.insertBefore(
      errorElement,
      this.element.nextElementSibling
    );
  }

  iniciar() {
    this.adcionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}
