// 🧪 Ex 1 – Criar uma classe abstrata "Pessoa"
// 1. Crie uma classe abstrata `Pessoa` com os atributos `nome` e `idade`.
// 2. Adicione um método abstrato: `public abstract void apresentar();`
// 3. Crie duas classes que estendem Pessoa: `Aluno` e `Professor`.
// 4. Cada classe deve implementar o método `apresentar()` de forma personalizada.
// 5. Crie uma classe `Main` para instanciar um `Aluno` e um `Professor` e chamar seus métodos.

public class java_01 {
    public static void main(String[] args) {
        Aluno aluno = new Aluno();
        Professor professor = new Professor();

        aluno.apresentar();
        professor.apresentar();
    }
}

abstract class Pessoa {
    String nome;
    int idade;

    public abstract void apresentar();
}

class Aluno extends Pessoa {
    public void apresentar() {
        System.out.println("Eu sou um Aluno!");
    }
}

class Professor extends Pessoa {
    public void apresentar() {
        System.out.println("Eu sou um Professor!");
    }
}