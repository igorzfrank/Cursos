// Criar uma classe chamada Pessoa com os atributos:
// String nome
// int idade
// Criar um método exibirInformacoes() que imprima nome e idade.
// No main, criar um objeto Pessoa, definir os atributos e chamar o método.

import java.util.Scanner;

public class java_01 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o seu nome: ");
        String n = scanner.nextLine();
        System.out.print("Digite a sua idade: ");
        int i = scanner.nextInt();

        Pessoa pessoa = new Pessoa(n, i);

        exibirInformacoes(pessoa.nome, pessoa.idade);
    }

    public static void exibirInformacoes(String n, int i) {
        System.out.println("O seu nome é " + n + " e a sua idade é " + i);
    }

}

class Pessoa {
    String nome;
    int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
