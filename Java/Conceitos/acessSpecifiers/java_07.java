package Java.Conceitos.acessSpecifiers;

// 🧪 Exercício 8 – Pessoa e Estudante

// 1. Crie uma classe Pessoa com:
//    - atributo `private String nome`
//    - atributo `protected int idade`
//    - métodos públicos `setNome`, `getNome`, `setIdade`, `getIdade`
//
// 2. Crie uma subclasse Estudante:
//    - atributo `private String curso`
//    - método `setCurso`, `getCurso`
//    - método `exibirResumo()` que imprime nome, idade e curso
//
// 3. Crie um objeto Estudante na main e teste o método exibirResumo()

public class java_07 {
    public static void main(String[] args) {
        Estudante estudante = new Estudante();
        estudante.setNome("Alfredo");
        estudante.setIdade(23);
        estudante.setCurso("Medicina");

        estudante.exibirResumo();
    }
}

class Pessoa {
    private String nome;
    protected int idade;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getIdade() {
        return idade;
    }

}

class Estudante extends Pessoa {
    private String curso;

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getCurso() {
        return curso;
    }

    public void exibirResumo() {
        // System.out.println("Nome: " + getNome() + " - Idade: " + getIdade() + " - Curso: " + getCurso());
        System.out.println("Nome: " + " - Idade: " + getIdade() +" - Curso: " + getCurso());
    }
}