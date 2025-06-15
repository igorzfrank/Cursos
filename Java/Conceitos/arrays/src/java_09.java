// Tarefa:
// 1. Peça ao usuário para preencher um array com 10 números inteiros.
// 2. Depois, peça um número qualquer.
// 3. Exiba em quais índices esse número aparece no array.
//
// Exemplo:
// Número procurado: 7
// Encontrado nas posições: 1, 4, 9

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class java_09 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] array = new int[10];
        for(int i = 0; i < array.length; i++) {
            System.out.print("Digite o " + i + " valor: ");
            array[i] = scanner.nextInt();
        }
        System.out.print("Qual valor você gostaria buscar?: ");

        int choice = scanner.nextInt();
        ArrayList<Integer> index = new ArrayList<>();

        for(int c = 0; c < array.length; c++) {
            if(array[c] == choice) {
                index.add(c);
            }
        }

        if(index.size() > 0) {
            System.out.println("O valor buscado está nos index " + index);
        } else {
            System.out.println("Nenhum valor encontrado.");
        }
    }
}
