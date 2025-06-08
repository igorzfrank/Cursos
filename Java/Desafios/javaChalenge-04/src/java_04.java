// Criar a classe Livro com:
// String titulo
// String autor
// int numero Paginas
// Criar um método exibirResumo() que imprima todas as informações do livro.
// No main, criar dois livros e exibir os resumos.

import java.util.Scanner;

public class java_04 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        Livro livro1 = null;
        Livro livro2 = null;

        for (int i = 0; i < 2; i++) {
            System.out.println("/----------------------------------/");
            System.out.print("Digite o nome de um Livro: ");
            String t = scanner.nextLine();

            System.out.print("Qual é o Autor desse Livro?: ");
            String a = scanner.nextLine();

            System.out.print("Quantas Páginas tem esse Livro?: ");
            int n = scanner.nextInt();
            scanner.nextLine();

            if (i == 0) {
                livro1 = new Livro(t, a, n);
            } else {
                livro2 = new Livro(t, a, n);
            }
        }

        System.out.println("/----------------------------------/");
        System.out.println("O Primeiro Livro informado foi...");
        System.out.println("/----------------------------------/");
        livro1.exibirResumo();

        System.out.println("/----------------------------------/");
        System.out.println("O Segundo Livro informado foi...");
        System.out.println("/----------------------------------/");
        livro2.exibirResumo();

    }
}

class Livro {
    String titulo;
    String autor;
    int numPaginas;

    Livro(String t, String a, int i) {
        this.titulo = t;
        this.autor = a;
        this.numPaginas = i;
    }

    void exibirResumo() {
        System.out.println("O Titulo do livro é: " + this.titulo);
        System.out.println("Escrito pelo autor: " + this.autor);
        System.out.println("Com um total de " + this.numPaginas + " páginas!");
    }
}


