// 🧪 Ex 3 – Classe Pedido com method chaining completo
// 1. Crie `Pedido` com os atributos: `cliente`, `produto`, `quantidade`, `enviado`.
// 2. Implemente métodos encadeáveis para definir todos esses valores.
// 3. Adicione um método `resumo()` que imprime todos os dados.
// 4. Crie um pedido em uma única linha:
//    new Pedido().setCliente("João").setProduto("TV").setQuantidade(2).enviar().resumo();


public class java_03 {
    public static void main(String[] args) {
        Pedido pedido = new Pedido();
        pedido.setCliente("Marcos").setProduto("Chapeu").setQuantidade(10).enviar(true).resumo();
    }
}

class Pedido {
    String cliente;
    String produto;
    int quantidade;
    boolean enviado;

    Pedido setCliente(String cliente) {
        this.cliente = cliente;
        return this;
    }

    Pedido setProduto(String produto) {
        this.produto = produto;
        return this;
    }

    Pedido setQuantidade(int quantidade) {
        this.quantidade = quantidade;
        return this;
    }

    Pedido enviar(boolean enviado) {
        this.enviado = enviado;
        return this;
    }

    void resumo() {
        System.out.println("Cliente: " + cliente + " - Produto: " + produto + " - Quantidade: " + quantidade + " - Enviado: " + enviado);
    }
}
