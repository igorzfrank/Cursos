// Crie uma classe abstrata ou normal chamada Forma com:
// Um método calcularArea() que retorna um double.
// Crie duas subclasses que herdam de Forma:
// Circulo
// Atributo: raio
// Implementa calcularArea() com a fórmula: π × raio × raio
// Quadrado
// Atributo: lado
// Implementa calcularArea() com a fórmula: lado × lado
// No main:
// Crie um Circulo com raio 5.
// Crie um Quadrado com lado 4.
// Chame o método calcularArea() para cada um e imprima o resultado.

import java.util.Scanner;

public class java_04 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Você deseja calcular qual das FORMAS?");
        System.out.print("Circulo(C) ou Quadrado(Q): ");
        String choice = scanner.nextLine();
        System.out.print("Qual o valor da unidade?: ");
        double valor = scanner.nextDouble();

        if (choice.toLowerCase().equals("c")) {
            Circulo circulo = new Circulo(valor);
            circulo.calcularArea();
        } else if (choice.toLowerCase().equals("q")) {
            Quadrado quadrado = new Quadrado(valor);
            quadrado.calcularArea();
        } else {
            System.out.println("ERROR 404!");
        }
    }
}

class Forma {
    double un;

    Forma(double un) {
        this.un = un;
    }

    void calcularArea() {
        System.out.print("Calcular área!");
    };
}

class Circulo extends Forma {

    Circulo(double un) {
        super(un);
    }

    @Override
    void calcularArea() {
        double result = 3.14 * this.un * this.un;
        System.out.print("O valor da área calculada é de " + result);
    }
}

class Quadrado extends Forma {

    Quadrado(double un) {
        super(un);
    }

    @Override
    void calcularArea() {
        double result = this.un * this.un;
        System.out.print("O valor da área calculada é de " + result);
    }
}