// Tarefa:
// 1. Peça a base e a altura de um retângulo.
// 2. Calcule e exiba a área (base * altura), com duas casas decimais.
//
// Exemplo:
// Entrada: base = 5.0, altura = 2.0
// Saída: Área = 10.00


import java.util.Scanner;

public class java_03 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o valor da BASE: ");
        double base = scanner.nextDouble();
        System.out.print("Digite o valor da ALTURA: ");
        double altura = scanner.nextDouble();

        System.out.println("A área do retangulo é de " + String.format("%.2f", base*altura));
    }
}
