// Tarefa:
// 1. Crie um array de 5 inteiros e preencha com Scanner.
// 2. Crie um segundo array e copie todos os elementos do primeiro usando laço `for`.
// 3. Exiba os dois arrays para verificar se estão iguais.

import java.util.Arrays;
import java.util.Scanner;

public class java_07 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numArray = new int[5];
        int[] copyArray = new int[5];

        for(int i = 0; i < numArray.length; i++) {
            System.out.print("Digite o valor do " + i + " item: ");
            numArray[i] = scanner.nextInt();
        }

        for(int c = 0; c < numArray.length; c++) {
            copyArray[c] = numArray[c];
        }

        System.out.println("Primeiro Array: " +Arrays.toString(numArray));
        System.out.println("Segundo Array: " + Arrays.toString(copyArray));

    }
}
