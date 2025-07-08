// 🧪 Ex 2 – Criar um builder para um Pedido com itens
// 1. Crie a classe `Item` com: nome e quantidade
// 2. Crie a classe `Pedido` com os atributos:
//    - String cliente, List<Item> itens
// 3. Crie `PedidoBuilder` com métodos:
//    - `paraCliente(String nome)`
//    - `adicionarItem(String nome, int qtd)`
//    - `build()` → retorna o objeto Pedido
// 4. No main, monte um pedido com 2 ou mais itens, tudo encadeado.
//    Ex: new PedidoBuilder().paraCliente("João").adicionarItem("Arroz", 2).build();

import java.util.List;
import java.util.ArrayList;

public class java_07 {
    public static void main(String[] args) {
        Pedido pedido = new PedidoBuilder().setCliente("João").adicionarItem("Arroz", 2).adicionarItem("Feijão", 5).adicionarItem("Salada", 3).build();
        pedido.exibir();
    }
}

class PedidoBuilder {
    String cliente;
    String nome;
    int quantidade;
    List<Item> itens = new ArrayList<>();

    PedidoBuilder setCliente(String cliente) {
        this.cliente = cliente;
        return this;
    }

    PedidoBuilder adicionarItem(String nome, int quantidade) {
        itens.add(new Item(nome, quantidade));
        return this;
    }

    Pedido build() {
        return new Pedido(cliente, itens);
    }
}

class Item {
    String nome;
    int quantidade;

    Item(String nome, int quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
}

class Pedido {
    String cliente;
    List<Item> itens = new ArrayList<>();

    Pedido(String cliente, List<Item> itens) {
        this.cliente = cliente;
        this.itens = itens;
    }

    void exibir() {
        System.out.print("Cliente: " + cliente);
        for (Item i : itens) {
            System.out.print(" - Item: " + i.nome + " - Quantidade: " + i.quantidade);
        }
    }
}
