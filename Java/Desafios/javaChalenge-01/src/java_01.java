// Calculadora de idade
// Crie um programa que peça o nome e o ano de nascimento do usuário e exiba a idade atual.
// Entregar: Código que use Scanner, cálculos com inteiros e exiba nome + idade.

import java.time.LocalDate;
import java.util.Scanner;

public class java_01 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        int anoAtual = LocalDate.now().getYear();

        System.out.print("Me diga o seu nome? ");
        String nome = scanner.nextLine();

        System.out.print("Em qual ano você nasceu? ");
        int ano = scanner.nextInt();

        int idade = anoAtual - ano;

        System.out.println("O seu nome é " + nome + " e você deve ter " + idade +" anos");

        scanner.close();
    }
}
