// Contador regressivo
// Peça um número e exiba uma contagem regressiva até 0.

import java.util.Scanner;

public class java_04 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Cronometro POWER!");
        System.out.print("Digite um número inteiro maior que 0: ");
        int n = scanner.nextInt();

        while (n >= 0) {
            System.out.println("Contando " + n);
            n--;
        }
    }
}
