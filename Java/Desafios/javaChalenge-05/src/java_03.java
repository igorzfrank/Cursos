// Crie uma classe base chamada Animal com:
// Atributos: String nome e int idade
// Método: fazerSom() → que será sobrescrito nas subclasses.
// Crie duas subclasses:
// Cachorro (filha de Animal)
// Sobrescreve fazerSom() para imprimir "Au au"
// Gato (filha de Animal)
// Sobrescreve fazerSom() para imprimir "Miau"
// No método main:
// Crie um objeto Cachorro e outro Gato.
// Chame o método fazerSom() para cada um.

import java.util.Scanner;

public class java_03 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("/-----------------------------/");
        System.out.println("/----CADASTRO--DE--ANIMAIS----/");
        System.out.println("/-----------------------------/");
        System.out.print("Você deseja cadastrar um Gato(G) ou Cachorro(C)?: ");
        String choice = scanner.nextLine();
        System.out.print("Qual o NOME do seu Animal?: ");
        String nome = scanner.nextLine();
        System.out.print("Qual a IDADE do seu Animal?: ");
        int idade = scanner.nextInt();

        if (choice.toLowerCase().equals("g")) {
            Gato gato = new Gato(nome, idade);
            gato.fazerSom();
        } else if (choice.toLowerCase().equals("c")) {
            Cachorro cachorro = new Cachorro(nome, idade);
            cachorro.fazerSom();
        } else {
            System.out.println("ERROR 404!");
        }
    }
}

class Animal {
    String nome;
    int idade;

    Animal(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    void fazerSom() {
        System.out.println("O animal faz som!");
    }
}

class Cachorro extends Animal {
    Cachorro(String nome, int idade) {
        super(nome, idade);
    }
    void fazerSom() {
        System.out.println(this.nome + " faz Au au!");
    }
}

class Gato extends Animal {
    Gato(String nome, int idade) {
        super(nome, idade);
    }
    void fazerSom() {
        System.out.println(this.nome + " faz Miau Miau!");
    }
}