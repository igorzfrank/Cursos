package Java.Conceitos.finalKeyword;

// 🧪 Exercício 4 – Atributo `final` no construtor
// 1. Crie uma classe `Aluno` com um atributo `private final String matricula`.
// 2. Inicialize `matricula` no construtor da classe.
// 3. Crie um método `public String getMatricula()` para acessá-la.
// 4. Tente criar um método que altere a matrícula e veja o erro.
// 5. Na main, crie um objeto `Aluno` e imprima a matrícula.

public class java_04 {
    public static void main(String[] args) {
        Aluno aluno = new Aluno("010204");
        System.out.println("A matricula do aluno é " + aluno.getMatricula());
    }
}

class Aluno {
    private final String matricula;

    Aluno(String matricula) {
        this.matricula = matricula;
    }

    public String getMatricula() {
        return matricula;
    }

    void setMatricula(String matricula) {
        // this.matricula = matricula; - Não pode ser alterado.
    }
}