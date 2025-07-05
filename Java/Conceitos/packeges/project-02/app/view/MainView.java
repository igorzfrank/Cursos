package app.view;

// 🧪 Exercício 2 – Organizar por camadas (MVC)
// Estruture as seguintes pastas/pacotes:
// - `app.model`     → contém classe Produto (atributo nome, preco)
// - `app.controller` → contém classe ProdutoController com método cadastrarProduto()
// - `app.view`      → contém classe MainView com método main

// 1. Crie a classe Produto no pacote `app.model`, com toString()
// 2. Crie ProdutoController com método cadastrarProduto() que cria e retorna um Produto
// 3. Na MainView (main), importe Produto e ProdutoController, chame cadastrarProduto() e imprima o produto.

import app.model.Produto;
import app.controller.ProdutoController;

public class MainView {
    public static void main(String[] args) {
        ProdutoController controller = new ProdutoController();
        
        Produto p1 = controller.cadastroProduto("Notebook", 3500);
        Produto p2 = controller.cadastroProduto("Mouse", 80);

        System.out.println(p1);
        System.out.println(p2);
    }
}
