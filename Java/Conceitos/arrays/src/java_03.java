// Tarefa:
// 1. Após preencher um array de 5 números inteiros com Scanner,
// 2. Calcule e exiba:
//    - A soma de todos os números
//    - A média aritmética deles

import java.util.Scanner;

public class java_03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] num = new int[5];
        for(int i = 0; i < num.length; i++) {
            System.out.print("Digite o " + i + " valor: ");
            num[i] = scanner.nextInt();
        }
        int somaTotal = 0;
        for(int c = 0; c < num.length; c++) {
            somaTotal = somaTotal + num[c];
        }
        System.out.println("A Soma total do elemetos é de " + somaTotal);
        System.out.println("A Média total dos elementos é de " + (somaTotal/5));
    }
}
