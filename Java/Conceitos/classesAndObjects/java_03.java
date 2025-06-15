package Java.Conceitos.classesAndObjects;

// 1. Crie uma classe chamada Aluno com os atributos:
//    - nome (String)
//    - nota (double)
// 2. Adicione um método chamado verificarAprovacao() que:
//    - Imprima "Aprovado" se a nota for >= 7
//    - Imprima "Reprovado" se a nota for < 7
// 3. Crie dois objetos Aluno e teste esse método com notas diferentes.

public class java_03 {
    public static void main(String[] args) {
        Aluno aluno1 = new Aluno("João", 9);
        Aluno aluno2 = new Aluno("Pablo", 5.5);

        aluno1.verificarAprovacao();
        aluno2.verificarAprovacao();
    }
}

class Aluno {
    String nome;
    double nota;

    Aluno(String nome, double nota) {
        this.nome = nome;
        this.nota = nota;
    }

    void verificarAprovacao() {
        if(nota >= 7) {
            System.out.println("O aluno " + nome + " está APROVADO!");
        } else {
            System.out.println("O aluno " + nome + " está REPROVADO!");
        }
    }
}