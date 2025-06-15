// Tarefa:
// 1. Crie e preencha um array com 5 números inteiros.
// 2. Crie outro array de mesmo tamanho que contenha os valores invertidos.
//
// Exemplo:
// Original: [10, 20, 30, 40, 50]
// Invertido: [50, 40, 30, 20, 10]

import java.util.Arrays;

public class java_06 {
    public static void main(String[] args) {
        int[] num = {10, 20, 30, 40, 50};
        int[] numInv = new int[5];

        for(int i = 0; i < num.length; i++) {
            numInv[num.length - i - 1] = num[i];
        }

        System.out.println(Arrays.toString(numInv));
    }
}
