package Java.Conceitos.loops;

// Tarefa:
// 1. Crie um array: {3, 7, 10, 2, 9, 8}
// 2. Use `for-each` para exibir apenas os números pares.

public class java_04 {
    public static void main(String[] args) {
        int[] num = { 3, 7, 10, 2, 9, 8 };
        int count = 0;
        for (int n : num) {
            if (n % 2 == 0) {
                count++;
            }
        }
        System.out.println("O total de itens pares é de " + count);
    }
}
