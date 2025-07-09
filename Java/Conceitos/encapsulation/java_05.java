// 🧪 Ex 5 – Criar classe Usuario com validação de senha
// 1. Crie `Usuario` com:
//    - String nome (privado)
//    - String senha (privado)
// 2. Métodos:
//    - `setNome`, `getNome`
//    - `setSenha(String senha)` → só permite senha com 6 ou mais caracteres
//    - `verificarLogin(String tentativa)` → retorna true se for igual à senha
// 3. No main, crie um usuário, defina a senha e teste login com sucesso e erro.

public class java_05 {
    public static void main(String[] args) {
        Usuario usuario = new Usuario();
        usuario.setNome("Mateus");
        usuario.setSenha("mateu");
        usuario.verificarLogin("mateuszinho");
    }
}

class Usuario {
    private String nome;
    private String senha;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void getNome() {
        System.out.println("Nome: " + nome);
    }

    public void setSenha(String senha) {
        if(senha.length() >= 6) {
            this.senha = senha;
        } else {
            System.out.println("Senha Invalida!");
        }
    }

    boolean verificarLogin(String tentativa) {
        if(tentativa.equals(senha)) {
            System.out.println("Logado com Sucesso!");
            return true;
        } else {
            System.out.println("Senha Invalida!");
            return false;
        }
    }
}