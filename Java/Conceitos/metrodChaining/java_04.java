// 🧪 Ex 4 – Adicione validação dentro do encadeamento
// 1. Use a classe `Aluno` com: `nome`, `nota1`, `nota2`.
// 2. Crie métodos encadeáveis para definir nome e notas.
// 3. Crie `calcularMedia()` e `mostrarSituacao()`
//    - Ex: "Aprovado", "Reprovado", etc.
// 4. Teste com: new Aluno().setNome("Lucas").setNota1(8).setNota2(6).mostrarSituacao();

public class java_04 {
    public static void main(String[] args) {
        Aluno aluno = new Aluno();
        aluno.setNome("Enzo").setNota1(3.5).setNota2(6).mostrarSituacao();
    }
}

class Aluno {
    String nome;
    double nota1;
    double nota2;

    Aluno setNome(String nome) {
        this.nome = nome;
        return this;
    }

    Aluno setNota1(double nota1) {
        this.nota1 = nota1;
        return this;
    }

    Aluno setNota2(double nota2) {
        this.nota2 = nota2;
        return this;
    }

    double calcularMedia() {
        return (nota1 + nota2) / 2;
    }

    void mostrarSituacao() {
        if(calcularMedia() >= 7) {
            System.out.println("APROVADO!");
        }

        else if (calcularMedia() < 7 && calcularMedia() >= 5) {
            System.out.println("RECUPERAÇÃO!");
        } else {
            System.out.println("REPROVADO!");
        }
    }
}