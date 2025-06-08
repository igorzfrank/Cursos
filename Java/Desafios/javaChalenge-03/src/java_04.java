// Soma de elementos
// Some todos os números em um array de 10 elementos.

import java.util.Scanner;

public class java_04 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numbers = new int[10];

        for (int i = 0; i < 10; i++) {
            System.out.print("Digite um numero: ");
            numbers[i] = scanner.nextInt();
        }

        int soma = 0;

        for (int c = 0; c < numbers.length; c++) {
            soma = soma + numbers[c];
        }

        System.out.println("A soma de todos os números digitados é de " + soma);

        scanner.close();
    }
}
