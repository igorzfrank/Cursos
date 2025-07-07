// 🧪 Ex 1 – Criar uma classe Usuario com chaining
// 1. Crie a classe `Usuario` com os atributos: `String nome`, `int idade`, `boolean ativo`.
// 2. Implemente os métodos `setNome()`, `setIdade()`, e `ativar()`.
//    Todos devem retornar `this`.
// 3. Adicione o método `mostrar()` que imprime os dados do usuário.
// 4. No main, crie um objeto e encadeie as chamadas:
//    new Usuario().setNome("Ana").setIdade(30).ativar().mostrar();

public class java_01 {
    public static void main (String[] args) {
        Usuario usuario = new Usuario();
        usuario.setNome("Flavio").setIdade(15).ativar(false).mostrar();
    }
}

class Usuario {
    String nome;
    int idade;
    boolean ativo;

    Usuario setNome(String nome) {
        this.nome = nome;
        return this;
    };

    Usuario setIdade(int idade) {
        this.idade = idade;
        return this;
    };

    Usuario ativar(boolean ativo) {
        this.ativo = ativo;
        return this;
    };

    void mostrar() {
        System.out.println("Nome: " + nome + " - Idade: " + idade + " - Ativo: " + ativo);
    }
}