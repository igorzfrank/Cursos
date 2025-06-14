// Tarefa:
// 1. Crie uma variável `char c = 'A';`.
// 2. Converta esse char para `int`.
// 3. Depois, converta o número de volta para `char` e exiba.

public class java_03 {
    public static void main (String[] args) {
        char c = 'A';
        int cInt = (int) c;
        System.out.println(cInt);
        char newC = (char) cInt;
        System.out.println(newC);
        String cString = String.valueOf(cInt);
        System.out.println(cString);
    }
}
