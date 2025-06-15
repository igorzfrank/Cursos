package Java.Conceitos.loops;

// Tarefa:
// 1. Crie um array de palavras: {"café", "leite", "pão"}
// 2. Use `for-each` para exibir todas em MAIÚSCULAS.
//
// Dica: Use `toUpperCase()`

public class java_06 {
    public static void main(String[] args) {
        String[] words = {"café", "leite", "pão"};
        for(String w : words) {
            System.out.println(w.toUpperCase());
        }
    }
}
