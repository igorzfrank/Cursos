package Java.Conceitos.classesAndObjects;

// 1. Crie uma classe chamada Livro com os atributos:
//    - titulo (String)
//    - autor (String)
//    - anoPublicacao (int)
// 2. Crie 3 objetos diferentes da classe Livro.
// 3. Atribua valores distintos a cada objeto.
// 4. Exiba os dados de cada livro no console.

public class java_02 {
    public static void main(String[] args) {
        Livro livro1 = new Livro("Menino de Pijamas", "Paulo Oleiro", 2007);
        Livro livro2 = new Livro("Como Catar Coquinho", "Lucas Augusto", 2010);
        Livro livro3 = new Livro("Macaco Listrado", "Olivia Oliveira", 2016);

        livro1.exibirLivro();
        livro2.exibirLivro();
        livro3.exibirLivro();
    }
}

class Livro {
    String titulo;
    String autor;
    int anoPublicacao;

    Livro(String titulo, String autor, int anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    void exibirLivro() {
        System.out.println(titulo);
        System.out.println(autor);
        System.out.println(anoPublicacao);
    }
}