// Tarefa:
// 1. Preencha um array de 10 números inteiros com Scanner.
// 2. Conte quantos são pares e quantos são ímpares.
// 3. Exiba a quantidade de cada um.
//
// Exemplo:
// Pares: 6
// Ímpares: 4


import java.util.Scanner;

public class java_05 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] num = new int[10];

        for(int i = 0; i < num.length; i++) {
            System.out.print("Digite o valor do " + i + " item: ");
            num[i] = scanner.nextInt();
        }

        int par = 0;
        int impar = 0;

        for(int c = 0; c < num.length; c++) {
            if(num[c]%2 == 0) {
                par++;
            } else {
                impar++;
            }
        }

        System.out.println("Pares: " + par);
        System.out.println("Impares: " + impar);
    }
}
