// Tarefa:
// 1. Crie um array de 5 inteiros.
// 2. Peça ao usuário que digite 5 números e armazene no array.
// 3. Exiba os valores digitados.
//
// Dica: Use Scanner e laço for.

import java.util.Scanner;

public class java_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numeros = new int[5];
        for (int i = 0; i < numeros.length; i++) {
            System.out.print("Digite o valor do item " + i + " do Array: ");
            numeros[i] = scanner.nextInt();
        }
        for (int c = 0; c <numeros.length; c++) {
            System.out.println("Elemento " + c + ": " + numeros[c]);
        }
    }
}
