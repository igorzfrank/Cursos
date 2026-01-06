// 🧪 Ex 5 – Criar enum TipoConta com:
//    CORRENTE, POUPANCA
// 1. Crie método `getTaxaOperacao()` no enum que retorna:
//    - 0.05 para CORRENTE
//    - 0.01 para POUPANCA
// 2. Crie classe Conta com saldo e tipo de conta
// 3. Crie método aplicarTaxa() que desconta a taxa do saldo com base no tipo da conta
// 4. No main, crie contas de cada tipo e aplique a taxa, exibindo o novo saldo

public class java_05 {
    public static void main(String[] args) {
        Conta contaCorrente = new Conta(100, TipoConta.CORRENTE);
        contaCorrente.aplicarTaxas();
        contaCorrente.aplicarTaxas();

        Conta contaPoupanca = new Conta(500, TipoConta.POUPANCA);
        contaPoupanca.aplicarTaxas();
        contaPoupanca.aplicarTaxas();
    }
}

class Conta {
    double saldo;
    TipoConta tipoConta;

    Conta(double saldo, TipoConta tipoConta) {
        this.saldo = saldo;
        this.tipoConta = tipoConta;
    }

    void aplicarTaxas() {
        this.saldo = saldo - (saldo * tipoConta.getTaxaOperacao());
        System.out.println("Saldo pós aplicação de taxa: " + saldo);
    }
}

enum TipoConta {
    CORRENTE,
    POUPANCA;

    double getTaxaOperacao() {
        if(this == CORRENTE) {
            return 0.05;
        } else {
            return 0.01;
        }
    }
}