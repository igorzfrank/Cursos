// Tarefa:
// 1. Verifique se a string "Bem-vindo ao curso de Java" contém:
//    - A palavra "curso"
//    - A palavra "Python"
//
// Use o método `contains()` e mostre as respostas.

public class java_06 {
    public static void main (String[] args) {
        String frase = "Bem-vindo ao curso de Java";
        System.out.println("Contem 'curso' " + frase.contains("curso"));
        System.out.println("Contem 'Python' " + frase.contains("Python"));
    }
}
