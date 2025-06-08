// Somador até zero
// Leia números até que o usuário digite 0. Ao final, mostre a soma de todos.

import java.util.Scanner;

public class java_05 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        double result = 0;
        double n;
        System.out.println("SOMADOR");
        do {
            System.out.print("Digite um número (0 para finalizar): ");
            n = scanner.nextDouble();
            result = result + n;
        } while ( n != 0);
        System.out.println("A soma de todos os valores digitados é igual a " + result);

        scanner.close();
    }
}
