// Tarefa:
// 1. Crie a string "Hoje está chovendo".
// 2. Substitua "chovendo" por "ensolarado" com `replace()`.
// 3. Mostre a frase original e a modificada.

public class java_05 {
    public static void main (String[] args) {
        String frase = "Hoje está chovendo";
        System.out.println(frase);
        System.out.println(frase.replace("chovendo", "ensolarado"));
    }
}
