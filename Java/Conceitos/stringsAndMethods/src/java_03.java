// Tarefa:
// 1. Pegue a string "Desenvolvedor Backend".
// 2. Use `substring()` para extrair:
//    - A palavra "Backend"
//    - A palavra "Desenvolvedor"
//
// Dica: use os índices corretos (inclusive com `indexOf()`).


public class java_03 {
    public static void main (String[] args) {
        String frase = "Desenvolvedor Backend";
        System.out.println(frase.substring(0, 13));
        System.out.println(frase.substring(14, frase.length()));
    }
}
