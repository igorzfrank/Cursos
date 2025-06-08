// Lista de compras
// Crie um array com 5 itens digitados pelo usuário e mostre-os.

import java.util.Arrays;
import java.util.Scanner;

public class java_01 {
    public static void main (String[] arcs) {
        Scanner scanner = new Scanner(System.in);
        String[] compras = new String[5];

        for (int i = 0; i < 5; i++) {
            System.out.print("Lista de compras " + "(" + (i+1) + "/5): ");
            compras[i] = scanner.nextLine();
        }

        System.out.println("Sua lista de compras ficou assim: ");
        System.out.print(Arrays.toString(compras));
        scanner.close();
    }
}
