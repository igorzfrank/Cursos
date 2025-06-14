// Tarefa:
// 1. Peça um número com casas decimais.
// 2. Exiba:
//    - Arredondado para cima (`Math.ceil()`)
//    - Arredondado para baixo (`Math.floor()`)
//    - Arredondado para o mais próximo (`Math.round()`)


import java.util.Scanner;

public class java_07 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um numero com 2 casas decimais: ");
        double num = scanner.nextDouble();
        System.out.println("O valor Arredondado para CIMA é igual a: " + Math.ceil(num));
        System.out.println("O valor Arredondado para BAIXO é igual a: " + Math.floor(num));
        System.out.println("O valor Arredondado para o MAIS PROXIMO é igual a: " + Math.round(num));
    }
}
