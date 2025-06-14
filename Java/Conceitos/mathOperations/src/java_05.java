// Tarefa:
// 1. Peça dois valores inteiros.
// 2. Faça a divisão, convertendo para `double` para mostrar resultado com ponto decimal.
//
// Exemplo:
// Entrada: 5 e 2
// Saída: 2.5

import java.util.Scanner;

public class java_05 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o PRIMEIRO numero INTEIRO: ");
        int n1 = scanner.nextInt();
        System.out.print("Digite o SEGUNDO numero INTEIRO: ");
        int n2 = scanner.nextInt();
        double result = (double)n1/n2;
        System.out.print("Valor = " + result);
    }
}
