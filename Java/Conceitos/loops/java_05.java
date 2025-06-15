package Java.Conceitos.loops;

import java.util.Scanner;

// Tarefa:
// 1. Peça ao usuário que digite uma palavra.
// 2. Use `toCharArray()` para converter a `String` em array de caracteres.
// 3. Use `for-each` para imprimir um caractere por linha.
//
// Exemplo:
// Entrada: "Java"
// Saída:
// J
// a
// v
// a

public class java_05 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Escreva uma palavra: ");
        String word = scanner.nextLine();
        char[] wordArray = word.toCharArray();

        for (char c : wordArray) {
            System.out.println(c);
        }

        scanner.close();
    }
}
