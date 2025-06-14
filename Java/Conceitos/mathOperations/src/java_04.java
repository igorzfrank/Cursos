// Tarefa:
// 1. Peça o preço de um produto e o percentual de desconto.
// 2. Calcule e exiba o valor com desconto aplicado.
//
// Exemplo:
// Entrada: R$ 100,00 e 10%
// Saída: Valor final: R$ 90,00

import java.util.Scanner;

public class java_04 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o valor do PRODUTO: ");
        double valorProduto = scanner.nextDouble();
        System.out.print("Digeite o valor do DESCONTO aplicado (%): ");
        double desconto = scanner.nextDouble();

        double valorDesconto = (valorProduto * desconto)/100;

        System.out.println("Valor final: R$ " + String.format("%.2f", valorProduto - valorDesconto));
    }
}
