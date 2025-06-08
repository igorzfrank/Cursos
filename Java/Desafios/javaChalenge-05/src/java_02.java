// Criar a classe ContaBancaria com:
// Atributo privado double saldo
// Criar os métodos públicos:
// depositar(double valor)
// sacar(double valor)
// getSaldo()
// No main, testar os métodos com depósitos e saques.

import java.util.Scanner;

public class java_02 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("/---------------------------/");
        System.out.println("/---BANCO---PANAMERICANO----/");
        System.out.println("/---------------------------/");

        boolean keep = true;

        ContaBancaria conta = new ContaBancaria();

        while(keep == true) {
            double valor;

            System.out.print("Você deseja SACAR(S) - DEPOSITAR(D) - SAIR(0)?: ");
            String choice = scanner.nextLine();

            switch (choice.toLowerCase()) {
                case "d":
                        System.out.print("Qual o VALOR você deseja DEPOSITAR?: ");
                        valor = scanner.nextDouble();
                        scanner.nextLine();
                        conta.depositar(valor);
                        conta.getSaldo();
                    break;
                case "s":
                        System.out.print("Qual o VALOR você deseja SACAR?: ");
                        valor = scanner.nextDouble();
                        scanner.nextLine();
                        conta.sacar(valor);
                        conta.getSaldo();
                    break;
                case "0":
                    System.out.println("Encerrando...");
                    keep = false;
                    break;
                default:
                    System.out.println("ERROR 404!");
                    break;
            }
        }
    }
}

class ContaBancaria {
    private double saldo;

    void ContaBancaria() {
        this.saldo = 0;
    }

    void depositar(double depo) {
        this.saldo = this.saldo + depo;
    }

    void sacar(double depo) {
        this.saldo = this.saldo - depo;
    }

    void getSaldo() {
        System.out.println("Saldo: " + this.saldo);
    }
}
