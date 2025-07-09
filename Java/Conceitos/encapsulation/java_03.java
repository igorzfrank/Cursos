// 🧪 Ex 3 – Criar classe Aluno com atributos privados
// 1. Crie a classe `Aluno` com:
//    - String nome
//    - double nota1, nota2
// 2. Crie métodos para:
//    - `setNome`, `setNota1`, `setNota2` com validação de nota entre 0 e 10
//    - `calcularMedia()` → retorna a média das duas notas
//    - `getNome()` e `getMedia()`
// 3. Crie um aluno no main, defina suas notas e imprima a média final.


public class java_03 {
    public static void main (String[] args) {
        Aluno aluno = new Aluno();
        aluno.setNome("Lucas");
        aluno.setNota1(9);
        aluno.setNota2(11);
        aluno.getNome();
        aluno.getMedia();
    }
}

class Aluno {
    private String nome;
    private double n1;
    private double n2;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void getNome() {
        System.out.println("Nome do Aluno: " + nome);
    }

    public void setNota1(double n1) {
        if(n1 <= 10 && n1 > 0) {
            this.n1 = n1;
        } else {
            error();
        }
    } 

    public void setNota2(double n2) {
        if(n2 <= 10 && n2 > 0 ){
            this.n2 = n2;
        } else {
            error();
        }
    }

    private double calcularMedia() {
        return ((n1+n2)/2);
    }

    public void getMedia() {
        System.out.println("Media do Aluno: " + calcularMedia());
    }

    private void error() {
        System.out.println("VALOR INVÁLIDO!");
    }
}