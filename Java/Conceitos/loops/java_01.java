package Java.Conceitos.loops;

// Tarefa:

// 1. Crie um array de inteiros com os valores: {2, 4, 6, 8, 10}
// 2. Use um loop `for-each` para exibir todos os números na tela.

public class java_01 {
    public static void main(String[] args) {
        int[] num = { 2, 4, 6, 8, 10 };
        for(int n : num) {
            System.out.println(n);
        }
    }
}
