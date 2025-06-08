// Média com função
// Crie um método que receba 3 notas e retorne a média.

import java.util.ArrayList;
import java.util.Scanner;

public class java_02 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Double> numeros = new ArrayList<>();

        for (int i = 0; i < 3; i++) {
            System.out.print("Digite um número: ");
            numeros.add(scanner.nextDouble());
        }

        System.out.println("A media do aluno é " + mediaAluno(numeros.get(0), numeros.get(1), numeros.get(2)));
    }

    public static double mediaAluno(double n1, double n2, double n3) {
        double result = (n1 + n2 + n3) / 3;
        return result;
    }
}
