// Calculadora simples
// Peça dois números e uma operação (+, -, *, /) e exiba o resultado.

import java.util.Scanner;

public class java_04 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        double result;

        System.out.println("Calculator 2000");
        System.out.print("Digite o primeiro número: ");
        double n1 = scanner.nextDouble();
        scanner.nextLine();

        System.out.print("Escolha a operação (+, -, *, /): ");
        String op = scanner.nextLine();

        System.out.print("Digite o segundo número: ");
        double n2 = scanner.nextDouble();

        System.out.println("Calculando...");

        switch (op) {
            case "+":
                    result = n1 + n2;
                    System.out.println("O resultado da SOMA de " + n1 + " + " + n2 + " é igual a " + String.format("%.2f", result));
                break;
            case "-":
                    result = n1 - n2;
                    System.out.println("O resultado da SUBITRAÇÃO de " + n1 + " - " + n2 + " é igual a " + String.format("%.2f", result));
                break;
            case "*":
                    result = n1 * n2;
                    System.out.println("O resultado da MULTIPLICAÇÃO de " + n1 + " * " + n2 + " é igual a " + String.format("%.2f", result));
                break;
            case "/":
                    result = n1 / n2;
                    System.out.println("O resultado da DIVISÃO de " + n1 + " / " + n2 + " é igual a " + String.format("%.2f", result));
                break;
            default:
                System.out.println("Error 404!");
        }

        scanner.close();
    }
}
