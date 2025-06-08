import java.util.Scanner;

// Par ou ímpar
// Leia um número e diga se ele é par ou ímpar.
public class java_05 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Par ou Impar?");
        System.out.print("Digite um número: ");
        int n = scanner.nextInt();

        if (n % 2 == 0) {
            System.out.println("É PAR!");
        } else {
            System.out.println("É IMPAR!");
        }

        scanner.close();
    }
}
