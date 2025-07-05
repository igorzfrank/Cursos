package Java.Conceitos.nestedClasses;

// 🧪 Exercício 4 – Anonymous Inner Class com Interface
// 1. Crie uma interface chamada Operacao com um método executar().
// 2. Na main, crie um objeto de Operacao usando uma classe anônima.
// 3. A implementação deve imprimir "Operação realizada com sucesso!".
// 4. Chame o método executar().

public class java_04 {
    public static void main(String[] args) {
        Operacao operacao = new Operacao() {
            public void executar() {
                System.out.println("Operação realizada com sucesso!");
            }
        };

        operacao.executar();
    }
}

interface Operacao {
    public void executar();
}