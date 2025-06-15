package Java.Conceitos.acessSpecifiers;

// 🧪 Exercício 6 – Funcionário e Gerente
// 1. Crie uma classe Funcionario com:
//    - atributo `private String nome`
//    - atributo `protected double salario`
//    - métodos públicos `setNome`, `getNome`, `setSalario`, `getSalario`
//
// 2. Crie a classe Gerente que herda de Funcionario:
//    - defina um método `calcularBonus()` que retorna 0.2 * salario
//    - defina um método `exibirDados()` que imprime nome, salário e bônus
//
// 3. Crie a main para testar a classe Gerente.

public class java_05 {
    public static void main(String[] args) {
        Gerente gerente = new Gerente();
        gerente.setNome("Oswaldo");
        gerente.setSalario(5580);

        gerente.exibirDados();
    }
}

class Funcionario {
    private String nome;
    protected double salario;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public double getSalario() {
        return salario;
    }
}

class Gerente extends Funcionario {
    public double calcularBonus() {
        return getSalario() * 0.2;
    }

    public void exibirDados() {
        System.out.println("Nome: " + getNome() + " - Salário: " + getSalario() + " - Bonus: " + calcularBonus());
    }
}
