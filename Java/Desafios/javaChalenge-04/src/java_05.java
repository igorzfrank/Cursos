// Criar a classe Calculadora com os métodos:
// somar(double a, double b)
// subtrair(double a, double b)
// multiplicar(double a, double b)
// dividir(double a, double b)
// No main, criar um objeto da calculadora e chamar os métodos com valores de exemplo.

import java.util.Scanner;

public class java_05 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("SUPER CALCULATOR 2000");
        System.out.print("Digite o PRIMEIRO número: ");
        double n1 = scanner.nextDouble();
        System.out.print("Digite o SEGUNDO número: ");
        double n2 = scanner.nextDouble();
        scanner.nextLine();

        Calculadora calculadora = new Calculadora(n1, n2);

        boolean keep = true;

        while(keep == true) {
            System.out.println("/----------------------------------/");
            System.out.println("Qual OPERAÇÃO você deseja realizar?");
            System.out.println("/----------------------------------/");
            System.out.print("Adição(+) - Subtração(-) - Multiplicação (*) - Divisão (/) - SAIR (0): ");
            String choice = scanner.nextLine();

            switch(choice) {
                case "+":
                    calculadora.somar();
                    System.out.println("SOMANDO... " + calculadora.n1 + " + " + calculadora.n2 + " temos " + calculadora.result);
                    break;
                case "-":
                    calculadora.subtrair();
                    System.out.println("SUBTRAINDO... " + calculadora.n1 + " - " + calculadora.n2 + " temos " + calculadora.result);
                    break;
                case "*":
                    calculadora.multiplicar();
                    System.out.println("MULTIPLICANDO... " + calculadora.n1 + " * " + calculadora.n2 + " temos " + calculadora.result);
                    break;
                case "/":
                    calculadora.dividir();
                    System.out.println("DIVIDINDO... " + calculadora.n1 + " / " + calculadora.n2 + " temos " + calculadora.result);
                    break;
                case "0":
                    keep = false;
                    System.out.println("Encerrando...");
                    break;
                default:
                    System.out.println("ERROR 404!");
                    break;
            }
        }
        scanner.close();
    }
}

class Calculadora {
    double n1;
    double n2;
    double result;

    Calculadora(double n1, double n2) {
        this.n1 = n1;
        this.n2 = n2;
    }

    void somar() {
        this.result = this.n1 + this.n2;
    }

    void subtrair() {
        this.result = this.n1 - this.n2;
    }

    void multiplicar() {
        this.result = this.n1 * this.n2;
    }

    void dividir() {
        this.result = this.n1 / this.n2;
    }


}
