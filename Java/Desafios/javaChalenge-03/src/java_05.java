// Verificar presença
// Verifique se um nome está em um array de nomes.

import java.util.Scanner;

public class java_05 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] nomes = {"João", "Pedro", "Lucas", "Mateus", "Otávio", "Cláudio", "Henrique", "Igor", "Cleber"};

        System.out.print("Escreva seu nome e veja se está na listagem: ");
        String nome = scanner.nextLine();

        int i;

        for (i = 0; i < nomes.length; i++) {
            if (nome.equals(nomes[i])) {
                System.out.println("Nome ENCONTRADO na listagem!");
                break;
            }
        }

        if (i == 9) {
            System.out.println("Nome NÂO ENCONTRADO!");
        }

        scanner.close();
    }
}
