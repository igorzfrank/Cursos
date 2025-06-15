// Tarefa:
// 1. Preencha um array de 5 números inteiros.
// 2. Descubra e exiba:
//    - O maior valor do array
//    - O menor valor do array

import java.util.Scanner;

public class java_04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] num = new int[5];

        for(int i = 0; i < num.length; i++) {
            System.out.print("Digite o valor do " + i + " item: ");
            num[i] = scanner.nextInt();
        }

        int maior = 0;
        int menor = 0;

        for(int c = 0; c < num.length; c++) {
            if(c == 0) {
                maior = num[c];
                menor = num[c];
            }

            if(num[c] > maior) {
                maior = num[c];
            }

            if(num[c] < menor) {
                menor = num[c];
            }


        }

        System.out.println("O Maior valor é " + maior);
        System.out.println("O Menor valor é " + menor);
    }
}
