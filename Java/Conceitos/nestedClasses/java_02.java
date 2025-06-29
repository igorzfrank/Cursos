package Java.Conceitos.nestedClasses;

// 🧪 Exercício 2 – Inner Class (Regular)
// 1. Crie uma classe externa chamada Livro com um atributo private String titulo.
// 2. Crie um construtor para definir o título.
// 3. Crie uma classe interna chamada Pagina com um método imprimirTitulo()
//    que imprime o título do livro.
// 4. Na main, crie um objeto Livro e depois um objeto Pagina associado a ele.
// 5. Chame o método imprimirTitulo() a partir da inner class.

public class java_02 {
    public static void main(String[] args) {
        Livro livro = new Livro("O Garoto do Pijama Listrado");
        Livro.Pagina pagina = livro.new Pagina();

        pagina.imprimirTitulo();
    }
}

class Livro {
    private String titulo;

    Livro(String titulo) {
        this.titulo = titulo;
    }

    class Pagina {
        void imprimirTitulo() {
            System.out.println("O titulo do livro é " + titulo);
        }
    }
}