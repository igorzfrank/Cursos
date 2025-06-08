// Maior número
// Peça 5 números e mostre qual é o maior.

import java.util.ArrayList;
import java.util.Scanner;

public class java_03 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> numeros = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            System.out.print("Digite um número: ");
            numeros.add(scanner.nextInt());
        }

        int maior = 0;

        for (int c = 0; c < numeros.size(); c++) {
            if (numeros.get(c) > maior) {
                maior = numeros.get(c);
            }
        }

        System.out.println("O maior número digitado foi " + maior);
    }
}
