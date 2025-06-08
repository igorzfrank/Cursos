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
        System.out.println();
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

    }
}

class Gerente extends Funcionario {
    Gerente(String nome, double salario) {
        super(nome, salario);
    }

    void calcularBonus() {

    }
}