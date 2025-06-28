package Java.Conceitos.finalKeyword;

// 🧪 Exercício 2 – Método `final` não sobrescrevível
// 1. Crie uma classe chamada `Veiculo`.
// 2. Adicione um método `public final void ligar()` que imprime "Veículo ligado".
// 3. Crie uma subclasse `Carro` que herda de `Veiculo`.
// 4. Tente sobrescrever o método `ligar()` na classe `Carro` e observe o erro.
// 5. Crie um objeto `Carro` na main e chame o método `ligar()`.

public class java_02 {
    public static void main(String[] args) {
        Carro carro = new Carro();
        carro.ligar();
    }
}

class Veiculo {
    public final void ligar() {
        System.out.println("Veículo ligado");
    }
}

class Carro extends Veiculo {
    // void ligar() {
    //     System.out.println("Ligando o carro");
    // }
}