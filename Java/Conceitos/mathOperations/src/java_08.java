// Tarefa:
// 1. Peça um número negativo ao usuário.
// 2. Mostre o valor absoluto com `Math.abs()`
//
// Exemplo:
// Entrada: -20
// Saída: 20

import java.util.Scanner;

public class java_08 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um numero negativo: ");
        double num = scanner.nextDouble();

        System.out.println("O numero convertido é " + Math.abs(num));
    }
}
