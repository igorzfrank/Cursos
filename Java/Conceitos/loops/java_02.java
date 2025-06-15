package Java.Conceitos.loops;

// Tarefa:
// 1. Crie um array de inteiros: {5, 10, 15, 20}
// 2. Use `for-each` para somar todos os elementos.
// 3. Exiba o total.

public class java_02 {
    public static void main(String[] args) {
        int[] num = { 5, 10, 15, 20 };
        int sum = 0;
        for(int n : num) {
            sum = sum + n;
        };
        System.out.println("O somatorio é igual a " + sum);
    }
}
