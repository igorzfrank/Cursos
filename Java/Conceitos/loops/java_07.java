package Java.Conceitos.loops;

// Tarefa:
// 1. Crie um array de nomes: {"Ana", "Marcos", "Fernanda"}
// 2. Use `for-each` para exibir: "Nome: X - Letras: Y"
//
// Exemplo:
// Nome: Ana - Letras: 3

public class java_07 {
    public static void main(String[] args) {
        String[] names = {"Ana", "Marcos", "Fernanda"};
        for (String n : names) {
            System.out.println("Nome: " + n + " - Letras: " + n.length());
        }
    }
}
