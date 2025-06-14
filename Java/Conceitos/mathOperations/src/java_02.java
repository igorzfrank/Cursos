// Tarefa:
// 1. Peça três notas decimais ao usuário.
// 2. Calcule e exiba a média aritmética.
//
// Exemplo:
// Entrada: 7.5, 8.0, 6.5
// Saída: Média: 7.33


import java.util.Scanner;

public class java_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o PRIMEIRO número: ");
        double n1 = scanner.nextDouble();
        System.out.print("Digite o SEGUNDO número: ");
        double n2 = scanner.nextDouble();
        System.out.print("Digite o TERCEIRO número: ");
        double n3 = scanner.nextDouble();
        double media = (n1 + n2 + n3)/3;
        System.out.println("A Média é " + String.format("%.2f", media));
    }
}
