// Tabuada personalizada
// Peça um número e mostre a tabuada de 1 a 10 usando while.

import java.util.Scanner;

public class java_02 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner (System.in);

        System.out.println("SUPER TABUADA!");
        System.out.print("Digite o número que você gostaria de ver a Tabuada: ");
        int n = scanner.nextInt();
        int i = 0;
        while (i <= 10) {
            int result = i * n;
            System.out.println(n + " * " + i + " = " + result);
            i++;
        }

        scanner.close();
    }
}
