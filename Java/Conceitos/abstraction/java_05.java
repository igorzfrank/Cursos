// 🧪 Ex 5 – Usar classe abstrata com polimorfismo
// 1. Crie uma classe abstrata `Funcionario` com:
//    - Atributo `nome`
//    - Método abstrato `double calcularSalario();`
// 2. Crie duas subclasses: `CLT` e `PJ`:
//    - `CLT`: salário fixo
//    - `PJ`: salário por hora (atributo horas * valorHora)
// 3. Crie uma lista de `Funcionario` e adicione objetos de ambas as classes
// 4. Use um loop para imprimir o nome e salário de todos os funcionários (polimorfismo)

import java.util.ArrayList;

public class java_05 {
    public static void main(String[] args) {
        ArrayList<Funcionario> funcionarios = new ArrayList<>();

        funcionarios.add(new CLT("João Gomes", 2550));
        funcionarios.add(new PJ("Flavia Marques", 220, 12));
        funcionarios.add(new PJ("Marcos Augusto", 180, 30));
        funcionarios.add(new CLT("Roberto Lindor", 5450));

        for(Funcionario f : funcionarios) {
            f.exibirFuncionario();
        }
    }
}

abstract class Funcionario {
    String nome;

    Funcionario(String nome) {
        this.nome = nome;
    }

    public abstract double calcularSalario();
    public abstract void exibirFuncionario();
}

class CLT extends Funcionario {
    double salario;

    CLT(String nome, double salario) {
        super(nome);
        this.salario = salario;
    }

    @Override
    public double calcularSalario() {
        return salario;
    }

    public void exibirFuncionario() {
        System.out.println("CLT - Nome: " + nome + " - Salário: " + salario);
    }
}

class PJ extends Funcionario {
    int horas;
    double valorHora;

    PJ(String nome, int horas, double valorHora) {
        super(nome);
        this.horas = horas;
        this.valorHora = valorHora;
    }

    public double calcularSalario() {
        return horas*valorHora;
    }

    public void exibirFuncionario() {
        System.out.println("PJ - Nome: " + nome + " - Salário: " + calcularSalario());
    }
}