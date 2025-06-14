// Exercício 2 – Narrowing (Explícito)
// Tarefa:
// 1. Crie uma variável `double` com o valor 9.99.
// 2. Converta esse valor para `int` com casting explícito.
// 3. Exiba o valor antes e depois do cast.

public class java_02 {
    public static void main (String[] args) {
        double var = 9.99;
        int varInt = (int)var;
        System.out.println("double var = " + var + " - varInt = " + varInt);
    }
}
