package academia.teste;

import academia.modelo.Aluno;

public class TesteAluno {
    public static void main(String[] args) {
        Aluno aluno = new Aluno("Bruno", "bruno@gmail.com", 18);

        System.out.println("O Nome do aluno é " + aluno.nome);
        System.out.println("O E-mail do aluno é " + aluno.email);
        System.out.println("A idade do aluno é " + aluno.idade);
    }
}
