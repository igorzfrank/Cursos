// Tarefa:
// 1. Crie dois arrays de 5 posições cada, preenchidos com Scanner.
// 2. Crie um terceiro array onde cada posição seja a soma dos valores nos mesmos índices dos dois arrays anteriores.
//
// Exemplo:
// A: [1, 2, 3]
// B: [4, 5, 6]
// C: [5, 7, 9]

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Scanner;

public class java_08 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] firstArray = new int[5];
        int[] secondArray = new int[5];
        int[] sumArray = new int[5];

        for(int i = 0; i < 2; i++) {
            for(int c = 0; c < firstArray.length; c++) {
                if(i == 0) {
                    System.out.print("Array " + (i+1) + " item " + (c+1) + " : ");
                    firstArray[c] = scanner.nextInt();
                } else {
                    System.out.print("Array " + (i+1) + " item " + (c+1) + ": ");
                    secondArray[c] = scanner.nextInt();
                }
            }
        }

        for(int count = 0; count < sumArray.length; count++) {
            sumArray[count] = firstArray[count] + secondArray[count];
        }

        System.out.println(Arrays.toString(sumArray));
    }
}
