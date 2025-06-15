// Tarefa:
// 1. Crie um array de 5 inteiros e preencha com valores fixos.
// 2. Peça ao usuário para informar um índice entre 0 e 4.
// 3. Mostre o valor correspondente no array.
// 4. Caso o índice seja inválido, capture e exiba uma mensagem de erro usando try/catch.
//
// Exemplo:
// Entrada: índice 6
// Saída: "Índice fora do limite do array!"

import java.util.Scanner;

public class java_10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] baseArray = {10, 20, 30, 40, 50};
        System.out.print("Escolha um Index de 0 a 4: ");
        int choice = scanner.nextInt();

        try {
            System.out.println("O valor do Index selecionado é " + baseArray[choice]);
        } catch (Exception e){
            System.out.println("Erro no Index selecioado.");
        }

        System.out.println("Encerrando...");
    }
}
