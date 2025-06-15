package Java.Conceitos.acessSpecifiers;

// 🧪 Exercício 7 – Produto e Eletronico

// 1. Crie uma classe Produto com:
//    - atributo `private String nome`
//    - atributo `protected double preco`
//    - métodos públicos `setNome`, `getNome`, `setPreco`, `getPreco`
//
// 2. Crie uma classe Eletronico que herda de Produto:
//    - atributo `private int garantiaMeses`
//    - métodos `setGarantia`, `getGarantia`
//    - método `exibirInformacoes()` que imprime nome, preco e garantia
//
// 3. Na main, crie um Eletronico, configure os dados e exiba as informações.

public class java_06 {
    public static void main(String[] args) {
        Eletronico eletronico = new Eletronico();
        eletronico.setNome("Celular");
        eletronico.setPreco(2999.90);
        eletronico.setGarantia(12);

        eletronico.exibirInformacoes();
    }
}

class Produto {
    private String nome;
    protected double preco;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public double getPreco() {
        return preco;
    }
}

class Eletronico extends Produto {
    private int garantiaMeses;

    public void setGarantia(int garantiaMeses) {
        this.garantiaMeses = garantiaMeses;
    }

    public int getGarantia() {
        return garantiaMeses;
    }

    public void exibirInformacoes() {
        System.out.println("Produto: " + getNome() + " - Preco: " + getPreco() + " - Garantia: " +getGarantia() + " meses!");
    }
}