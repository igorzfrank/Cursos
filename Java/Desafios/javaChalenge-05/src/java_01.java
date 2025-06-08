// Criar a classe Aluno com:
// String nome
// double nota1
// double nota2
// Criar um construtor que receba os 3 valores e calcule a média.
// Criar o método mostrarInfo() que imprima nome, notas e média.
// No main, criar um aluno e chamar mostrarInfo().

import java.util.Scanner;

public class java_01 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o Nome do aluno: ");
        String nome = scanner.nextLine();

        System.out.print("Digite a Primeira nota: ");
        double nota1 = scanner.nextDouble();

        System.out.print("Digite a Segunda nota: ");
        double nota2 = scanner.nextDouble();

        Aluno aluno = new Aluno(nome, nota1, nota2);

        aluno.exibirMedia();

        scanner.close();
    }
}

class Aluno {
    String nome;
    double nota1;
    double nota2;

    Aluno(String nome, double nota1, double nota2) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    void exibirMedia() {
        double media = (this.nota1 + this.nota2) * 0.5;
        System.out.println("Aluno: " + this.nome);
        System.out.println("Notas: " + this.nota1 + " / " + this.nota2);
        System.out.println("Média: " + media);
    }
}