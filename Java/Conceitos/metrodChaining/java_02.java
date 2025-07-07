// 🧪 Ex 2 – Criar classe Produto com method chaining
// 1. Crie a classe `Produto` com atributos: `nome`, `preco`, `desconto`.
// 2. Implemente os métodos:
//    - `setNome(String nome)`
//    - `setPreco(double preco)`
//    - `aplicarDesconto(double porcentagem)`
//    - `exibir()` → mostra o valor final com desconto aplicado
// 3. Use encadeamento no main para configurar e exibir o produto.


public class java_02 {
    public static void main (String[] args) {
        Produto produto = new Produto();
        produto.setNome("Panela").setPreco(500).aplicarDesconto(50).exibir();
    }
}

class Produto {
    String nome;
    double preco;
    double desconto;

    Produto setNome(String nome) {
        this.nome = nome;
        return this;
    };

    Produto setPreco(double preco) {
        this.preco = preco;
        return this;
    };

    Produto aplicarDesconto(double desconto) {
        this.desconto = desconto;
        return this;
    }

    void exibir() {
        System.out.println("Produto: " + nome + " - Valor Inicial " + preco + " - Desconto: " + desconto + " - Valor Final: " + (preco - (preco * (desconto/100))));
    }
}