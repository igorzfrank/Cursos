package Java.Conceitos.classesAndObjects;

// 🧪 Exercício 1 – Criando sua primeira classe
// 1. Crie uma classe chamada Pessoa com os atributos:
//    - nome (String)
//    - idade (int)
// 2. Na classe Main, crie um objeto dessa classe.
// 3. Atribua valores aos atributos.
// 4. Exiba os valores no console.

public class java_01 {
    public static void main(String[] args) {
        Pessoa pessoa = new Pessoa("Igor", 30);
        System.out.println("Nome " + pessoa.nome + " idade " + pessoa.idade);
        pessoa.comprimentar();
    }
}

class Pessoa {
    String nome;
    int idade;

    Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    void comprimentar() {
        System.out.println("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos!");
    }
}
