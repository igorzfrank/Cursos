package Java.Conceitos.nestedClasses;

// 🧪 Exercício 5 – Combinação de nested class
// 1. Crie uma classe externa chamada Carro com um atributo String modelo.
// 2. Crie uma inner class chamada Motor com um método mostrarMotor() que imprime:
//    "Carro [modelo] com motor V8".
// 3. Na main, crie um Carro com modelo definido e acesse mostrarMotor() da inner class.

public class java_05 {
    public static void main(String[] args) {
        Carro carro = new Carro("Renault");
        Carro.Motor motor = carro.new Motor();
        motor.mostrarMotor();
    }
}

class Carro {
    String modelo;

    Carro(String modelo) {
        this.modelo = modelo;
    }

    class Motor {

        void mostrarMotor() {
            System.out.println("Carro " + modelo + " com motor V8!");
        }
    }

}
