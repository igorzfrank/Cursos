// Tarefa:
// 1. Peça um número ao usuário.
// 2. Exiba:
//    - A raiz quadrada
//    - Elevado ao quadrado
//    - Elevado ao cubo
//
// Dica: Use `Math.sqrt()` e `Math.pow()`


import java.util.Scanner;

public class java_06 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um numero: ");
        double num = scanner.nextDouble();
        System.out.println("A raiz quadrada é " + Math.sqrt(num));
        System.out.println("Ele elevado ao quadro é " + Math.pow(num, 2));
        System.out.println("Ele elevado ao cubo é " + Math.pow(num, 3));
    }
}
