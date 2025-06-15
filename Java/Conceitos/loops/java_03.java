package Java.Conceitos.loops;

// Tarefa:
// 1. Crie um array de nomes: {"João", "Amanda", "Lucas", "Beatriz", "Ana"}
// 2. Use `for-each` para contar quantos nomes têm mais de 5 letras.
// 3. Exiba o total encontrado.

public class java_03 {
    public static void main(String[] args) {
        String[] nomes = {"João", "Amanda", "Lucas", "Beatriz", "Ana"};
        int count = 0;
        for(String n : nomes) {
            if(n.length() >= 5) {
                count++;
            }
        }
        System.out.println("O total de nomes com mais de 5 letras são " + count);
    }
}
