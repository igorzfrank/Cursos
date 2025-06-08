// Média de notas
//Peça 3 notas (double) e exiba a média. Diga se o aluno está "Aprovado" (>=7), "Recuperação" (>=5), ou "Reprovado".

import java.util.Scanner;

public class java_03 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor da 1ª nota: ");
        double m1 = scanner.nextDouble();

        System.out.print("Digite o valor da 2ª nota: ");
        double m2 = scanner.nextDouble();

        System.out.print("Digite o valor da 3ª nota: ");
        double m3 = scanner.nextDouble();

        double media = (m1 + m2 + m3) / 3;

        if (media >= 7) {
            System.out.print("Sua média é " + String.format("%.2f", media) + " você está APROVADO!");
        } else if (media >= 5) {
            System.out.print("Sua média é " + String.format("%.2f", media) + " você está RECUPERAÇÃO!");
        } else {
            System.out.print("Sua média é " + String.format("%.2f", media) + " você está REPROVADO!");
        }

        scanner.close();
    }
}
