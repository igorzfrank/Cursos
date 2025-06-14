// Exercício 1 – Widening (Implícito)
// Tarefa:
// 1. Crie uma variável do tipo `int` com o valor 100.
// 2. Atribua esse valor a uma variável do tipo `double`.
// 3. Exiba os dois valores.

public class java_01 {
    public static void main (String[] args) {
        int var = 100;
        double varDouble = var;

        System.out.println("int var = " + var + " - double varDouble " + varDouble);
    }
}
