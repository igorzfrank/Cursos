// 🧪 Ex 1 – Criar classe ContaBancaria com atributos encapsulados
// 1. Crie a classe `ContaBancaria` com os atributos privados:
//    - String titular
//    - double saldo
// 2. Crie os métodos públicos:
//    - `getTitular()` e `setTitular(String)`
//    - `getSaldo()` (mas NÃO crie `setSaldo()` diretamente)
//    - `depositar(double valor)` → adiciona ao saldo, se o valor for positivo
//    - `sacar(double valor)` → diminui do saldo, se o valor for menor que o saldo atual
// 3. No main, crie uma conta, deposite e saque valores, usando os métodos disponíveis.


public class java_01 {
    public static void main(String[] args) {
        ContaBancaria conta = new ContaBancaria();
        conta.setTitular("Homer");  
        conta.depositar(500);
        conta.getSaldo();
        conta.sacar(300);
        conta.sacar(300);
        conta.getSaldo();
    }
}

class ContaBancaria {
    private String titular;
    private double saldo;

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public void getTitular() {
        System.out.println("Titular da Conta: " + titular);
    }

    public void getSaldo() {
        System.out.println("Saldo da Conta: " + saldo);
    }

    public void depositar(double valor) {
        if(valor > 0) {
            this.saldo = saldo + valor;
            getSaldo();
        }
    }

    public void sacar(double valor) {
        if(valor <= saldo) {
            this.saldo = saldo - valor;
            getSaldo();
        }
    }
}