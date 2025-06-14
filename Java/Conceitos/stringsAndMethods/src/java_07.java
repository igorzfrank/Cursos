// Tarefa:
// 1. Crie uma string com espaços nas pontas, ex: "   Olá mundo!   ".
// 2. Remova os espaços usando `trim()`.
// 3. Mostre a string antes e depois do trim.


public class java_07 {
    public static void main (String[] args) {
        String frase = "     Olá mundo!    ";
        System.out.println(frase);
        System.out.println(frase.trim());
    }
}
