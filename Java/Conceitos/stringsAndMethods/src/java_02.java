// Tarefa:
// 1. Pegue a string "Java é poderoso".
// 2. Exiba o primeiro e o último caractere usando `charAt()`.
//
// Dica: lembre-se que os índices começam em 0.


public class java_02 {
    public static void main(String[] args) {
        String frase = "Java é poderoso";
        System.out.println("O 1º Caracter é " + frase.charAt(0) + " e o Ultimo é " + frase.charAt(frase.length() - 1));
    }
}
