package app.controller;

import app.model.Produto;

public class ProdutoController {
    public Produto cadastroProduto(String nome, double preco) {
        return new Produto(nome, preco);
    }
}
