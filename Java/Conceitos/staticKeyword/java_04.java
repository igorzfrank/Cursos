package Java.Conceitos.staticKeyword;

// 🧪 Exercício 4 – Compartilhamento de atributo static
// 1. Crie uma classe chamada Escola.
// 2. Adicione um atributo `static String nomeEscola`.
// 3. Crie dois objetos `Aluno` com atributos de nome pessoal (não static).
// 4. Atribua o nome da escola pelo atributo static.
// 5. Mostre que os dois objetos compartilham o mesmo nome de escola.

public class java_04 {
    public static void main (String[] args) {
        Aluno aluno1 = new Aluno("João");
        Aluno aluno2 = new Aluno("Lucas");
        Escola.setNome("CEMA");
        System.out.println("O aluno " + aluno1.nome + " estuda na escola "+aluno1.nomeEscola);
        System.out.println("O aluno " + aluno2.nome + " estuda na escola "+aluno2.nomeEscola);
    }
}

class Escola {
    static String nomeEscola;

    static void setNome(String nome) {
        nomeEscola = nome;
    }
}

class Aluno extends Escola {
    String nome;

    Aluno(String nome) {
        this.nome = nome;
    }
}
