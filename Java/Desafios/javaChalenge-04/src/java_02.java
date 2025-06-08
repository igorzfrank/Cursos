// Criar uma classe Produto com:
//String nome
// double preco
// int quantidade
// Criar um método calcularTotal() que retorne o valor total em estoque (preco * quantidade).
// No main, criar um produto, definir os valores e exibir o total.

import java.util.Scanner;

public class java_02 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("CALCULADORA DE VALOR DE ESTODQUE");
        System.out.print("Qual produto você gostaria de Cadastrar?: ");
        String n = scanner.nextLine();

        System.out.print("Qual é o valor do Produto?: ");
        double p = scanner.nextDouble();

        System.out.print("Quantas unidades do Produto?: ");
        int q = scanner.nextInt();

        Produto produto = new Produto(n, p, q);

        System.out.println("Produto: " + produto.nome);
        System.out.println("Valor total em R$ do estoque: R$:" + produto.calcularTotal());
    }
}

class Produto {
    String nome;
    double preco;
    int quantidade;

    Produto(String n, double p, int q) {
        this.nome = n;
        this.preco = p;
        this.quantidade = q;
    }

    double calcularTotal() {
        double total = this.preco * this.quantidade;
        return total;
    }
}
