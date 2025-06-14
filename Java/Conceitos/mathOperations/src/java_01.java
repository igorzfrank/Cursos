// Tarefa:
// 1. Peça dois números ao usuário.
// 2. Exiba:
//    - A soma
//    - A subtração
//    - A multiplicação
//    - A divisão (com resultado decimal)
//
// Exemplo:
// Entrada: 10 e 3
// Saída:
// Soma: 13
// Subtração: 7
// Multiplicação: 30
// Divisão: 3.33

import java.util.Scanner;

public class java_01 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o primeiro numero: ");
        double n1 = scanner.nextDouble();
        System.out.print("Digite o segundo numero: ");
        double n2 = scanner.nextDouble();
        System.out.println("Soma: " + (n1+n2));
        System.out.println("Subtracao: " + (n1-n2));
        System.out.println("Multiplicacao: " + (n1*n2));
        System.out.println("Divisao: " + (n1/n2));
    }
}
