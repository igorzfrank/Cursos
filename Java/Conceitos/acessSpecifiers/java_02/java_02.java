package Java.Conceitos.acessSpecifiers.java_02;

// 🧪 Exercício 2 – Acesso com modificador *default*

// 1. Crie uma classe chamada Produto com os atributos:
//    - nome (String) [sem modificador]
//    - preco (double) [sem modificador]
// 2. Crie outra classe no mesmo pacote chamada TesteProduto.
// 3. Na classe TesteProduto, crie um objeto Produto e acesse diretamente os atributos.
// 4. Agora, tente mover a classe TesteProduto para um pacote diferente e veja o que acontece.

public class java_02 {
    public static void main(String[] args) {
        Produto produto = new Produto("Livro", 20);
        produto.exibirInformacao();
    }
}
class Produto {
    String nome;
    double preco;

    Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    void exibirInformacao() {
        System.out.println("Nome " + nome + " preco " + preco);
    }
}