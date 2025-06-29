package Java.Conceitos.finalKeyword;

// 🧪 Exercício 5 – Final com métodos e variáveis juntos
// 1. Crie uma classe `Conta` com:
//    - atributo `private final int numeroConta` (inicialize no construtor)
//    - atributo `private double saldo`
// 2. Crie métodos `depositar(double)` e `sacar(double)`.
// 3. Crie um método `final void imprimirExtrato()` que imprime número da conta e saldo.
// 4. Crie uma subclasse `ContaPoupanca` e tente sobrescrever `imprimirExtrato()`.
// 5. Observe o erro por tentar sobrescrever um método `final`.

public class java_05 {
    public static void main(String[] args) {

    }
}

class Conta {
    private final int numeroConta;
    private double saldo = 0;

    Conta(int numeroConta) {
        this.numeroConta = numeroConta;
    }

    void depositar(double deposito) {
        this.saldo = saldo + deposito;
    }

    void sacar(double saque) {
        this.saldo = saldo - saque;
    }

    final void imprimirExtrato() {
        System.out.println("O Saldo da conta " + this.numeroConta + " é de R$: " + this.saldo);
    }
}

class ContaPoupanca extends Conta {
    ContaPoupanca(int numeroConta) {
        super(numeroConta);
    }
    // void imprimirExtrato() {

    // } não aplica a mudança no metodo
}
