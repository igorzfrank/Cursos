// Criar a classe Carro com:
// String marca
// String modelo
// int velocidade
// Criar os métodos:
// acelerar() → aumenta a velocidade em 10
// frear() → diminui a velocidade em 10
// No main, simular a criação de um carro e chamar os métodos algumas vezes, mostrando a velocidade.

import java.util.Scanner;

public class java_03 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Qual é a MARCA do seu Carro?: ");
        String m = scanner.nextLine();

        System.out.print("Qual é o MODELO do seu Carro?: ");
        String mod = scanner.nextLine();

        Carro carro = new Carro(m, mod);

        boolean keep = true;

        carro.acelerar();
        System.out.println("Acelerando o seu " + carro.modelo + " sua velocidade atual é " + carro.velocidade + " Km/h");

        while (keep == true) {

            System.out.print("Você deseja Acelerar(A), Freiar(B) ou Sair(C): ");
            String choice = scanner.nextLine();

            switch (choice.toLowerCase()) {
                case "a":
                    carro.acelerar();
                    System.out.println("Acelerando... velocidade atual " + carro.velocidade + " Km/h");
                    break;
                case "b":
                    carro.freiar();
                    System.out.println("Acelerando... velocidade atual " + carro.velocidade + " Km/h");
                    break;
                case "c":
                    keep = false;
                    break;
                default:
                    System.out.print("ERROR 404!");
            }
        }

        System.out.println("Finalizando...");

        scanner.close();
    }
}

class Carro {
    String marca;
    String modelo;
    int velocidade = 0;

    Carro(String m, String mod) {
        this.marca = m;
        this.modelo = mod;
    }

    void acelerar() {
        this.velocidade = this.velocidade + 10;
    }

    void freiar() {
        this.velocidade = this.velocidade - 10;
    }
}
