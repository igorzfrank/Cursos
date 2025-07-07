// 🧪 Ex 5 – Criar um builder com method chaining
// 1. Crie uma classe `LivroBuilder` com os atributos: `titulo`, `autor`, `paginas`.
// 2. Faça métodos: `comTitulo()`, `comAutor()`, `comPaginas()`, todos com retorno this.
// 3. Adicione um método `build()` que retorna um objeto `Livro` com esses dados.
// 4. Use o builder no main:
//    Livro l = new LivroBuilder().comTitulo("Java").comAutor("Deitel").comPaginas(800).build();


public class java_05 {
    public static void main(String[] args) {
        Livro l = new LivroBuilder().setTitulo("Java").setAutor("Deitel").setPaginas(800).build();
        l.exibir();
    }
}

class LivroBuilder {
    private String titulo;
    private String autor;
    private int paginas;

    LivroBuilder setTitulo(String titulo) {
        this.titulo = titulo;
        return this;
    }

    LivroBuilder setAutor(String autor) {
        this.autor = autor;
        return this;
    }

    LivroBuilder setPaginas(int paginas) {
        this.paginas = paginas;
        return this;
    }

    Livro build() {
        return new Livro(titulo, autor, paginas);
    }
}

class Livro {
    String titulo;
    String autor;
    int paginas;

    Livro(String titulo, String autor, int paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    void exibir() {
        System.out.println("Titulo: " + titulo + " - Autor: " + autor + " - Paginas: " + paginas);
    }
}