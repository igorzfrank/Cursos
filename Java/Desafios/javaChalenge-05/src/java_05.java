// Crie uma superclasse chamada Funcionario com:
// Atributos: String nome, double salario
// Método: calcularBonus() que será sobrescrito nas subclasses
// Crie duas subclasses:
// Gerente
// Bônus = salario * 0.30
// Programador
// Bônus = salario * 0.15
// No main:
// Crie um objeto Gerente com nome e salário.
// Crie um objeto Programador com nome e salário.
// Mostre o bônus de cada um chamando calcularBonus().

import java.util.Scanner;

public class java_05 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("/----------------------/");
        System.out.println("/--CALCULADORA--DE--BONUS--/");
        System.out.println("/----------------------/");
        System.out.print("Qual é o NOME do funcionário?: ");
        String nome = scanner.nextLine();
        System.out.print("Qual é o SALARIO do funcionário?:");
        double salario = scanner.nextDouble();
        System.out.print("O funcionário é um Gerente(G) ou um Programador(P)?:");
        String choice = scanner.next();
        if (choice.toLowerCase().equals("g")) {
            Gerente gerente = new Gerente(nome, salario);
            gerente.calcularBonus();
        } else if (choice.toLowerCase().equals("p")) {
            Programador programador = new Programador(nome, salario);
            programador.calcularBonus();
        } else {
            System.out.println("ERROR 404!");
        }
    }
}

class Funcionario {
    String nome;
    double salario;

    Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    void calcularBonus() {
        System.out.println("O bonus do funcionário!");
    }
}

class Gerente extends Funcionario {
    Gerente(String nome, double salario) {
        super(nome, salario);
    }

    void calcularBonus() {
        double bonus = salario * 0.3;
        System.out.print("O Gerente " + this.nome + " tem um bônus de " + bonus + "!");
    }
}

class Programador extends Funcionario {
    Programador(String nome, double salario) {
        super(nome, salario);
    }

    void calcularBonus() {
        double bonus = salario * 0.15;
        System.out.print("O Programador " + this.nome + " tem um bônus de " + bonus + "!");
    }
}