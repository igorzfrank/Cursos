// Tarefa:
// 1. Peça dois números.
// 2. Use `Math.max()` e `Math.min()` para mostrar o maior e o menor.
//
// Exemplo:
// Entrada: 14 e 27
// Saída:
// Maior: 27
// Menor: 14

import java.util.Scanner;

public class java_09 {
    public static void main(String[] args){
        Scanner scannner = new Scanner(System.in);
        System.out.print("Digite o PRIMEIRO numero: ");
        double n1 = scannner.nextDouble();
        System.out.print("Digite o SEGUNDO numero: ");
        double n2 = scannner.nextDouble();
        System.out.println("O Maior numero é " + Math.max(n1, n2));
        System.out.println("O Menor numero é " + Math.min(n1, n2));
    }
}
