package Java.Conceitos.acessSpecifiers;

// 🧪 Exercício 1 – Protegendo atributos com `private`
// 1. Crie uma classe chamada Pessoa com os atributos:
//    - nome (String) [privado]
//    - idade (int) [privado]
// 2. Adicione métodos públicos para:
//    - setNome(String nome)
//    - getNome()
//    - setIdade(int idade)
//    - getIdade()
// 3. Crie um objeto Pessoa na main, defina os dados usando os métodos e exiba-os.

public class java_01 {
    public static void main(String[] args) {
        Pessoa pessoa1 = new Pessoa();
        pessoa1.setNome("João");
        pessoa1.setIdade(28);

        Pessoa pessoa2 = new Pessoa();
        pessoa2.setNome("Lucas");
        pessoa2.setIdade(16);

        pessoa1.getNome();
        pessoa1.getIdade();
        pessoa2.getNome();
        pessoa2.getIdade();
    }
}

class Pessoa {
    private String nome;
    private int idade;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    void getNome() {
        System.out.println(nome);
    }

    void getIdade() {
        System.out.println(idade);
    }
}
