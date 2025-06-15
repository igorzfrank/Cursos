// Tarefa:
// 1. Crie um array de 5 números inteiros.
// 2. Atribua valores manualmente a cada posição.
// 3. Exiba todos os elementos usando um laço for.
//
// Exemplo de saída:
// Elemento 0: 10
// Elemento 1: 20
// ...

public class java_01 {
    public static void main(String[] args) {
        int[] numeros = new int[5];
        numeros[0] = 10;
        numeros[1] = 20;
        numeros[2] = 30;
        numeros[3] = 40;
        numeros[4] = 50;

        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elemento " + i +": "+numeros[i]);
        }
    }
}
