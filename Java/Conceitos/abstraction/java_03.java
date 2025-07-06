// 🧪 Ex 3 – Classe abstrata com métodos comuns
// 1. Crie uma classe abstrata `Veiculo` com:
//    - Atributo: `String modelo`
//    - Método abstrato: `void mover();`
//    - Método concreto: `void exibirModelo()` que imprime o modelo
// 2. Crie duas classes que estendem `Veiculo`: `Carro` e `Moto`
// 3. Implemente o método `mover()` de forma diferente em cada classe
// 4. No main, crie objetos, chame `mover()` e `exibirModelo()`

public class java_03 {
    public static void main(String[] args) {
        Carro carro = new Carro("Volks");
        Moto moto = new Moto("Suzuki");

        carro.exibirModelo();
        carro.mover();

        moto.exibirModelo();
        moto.mover();
    }
}

abstract class Veiculo {
    String modelo;

    Veiculo(String modelo) {
        this.modelo = modelo;
    }

    abstract void mover();

    void exibirModelo() {
        System.out.println("O modelo do veiculo é " + modelo);
    }
}

class Carro extends Veiculo {

    Carro(String modelo) {
        super(modelo);
    }

    void mover() {
        System.out.println("O carro está se movendo!");
    }
}

class Moto extends Veiculo {

    Moto(String modelo) {
        super(modelo);
    }

    void mover() {
        System.out.println("A moto está se movendo!");
    }
}