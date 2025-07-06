package cadastro.model;

public class Pessoa {
    public String nome;
    public int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public void exibir() {
        System.out.println("Pessoa de nome: " + nome + " - Idade: " + idade);
    }
}
