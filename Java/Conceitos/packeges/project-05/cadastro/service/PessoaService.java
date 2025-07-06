package cadastro.service;

import java.util.ArrayList;
import cadastro.model.Pessoa;

public class PessoaService {
    
    static ArrayList<Pessoa> pessoas = new ArrayList<>();

    public static void cadastrarPessoa(String nome, int idade) {
        pessoas.add(new Pessoa(nome, idade));
    };

    public static void listarPessoa() {
        for (Pessoa p : pessoas) {
            p.exibir();
        }
    };
}
