package Java.Conceitos.nestedClasses;

// 🧪 Exercício 2 – Inner Class (não static)
// 1. Crie uma classe externa chamada Livro com atributo String titulo.
// 2. Crie uma inner class chamada Capa com um método imprimirTitulo()
//    que imprime "Capa do livro: [titulo]".
// 3. Na main, instancie o Livro e depois a inner class Capa.
// 4. Chame o método imprimirTitulo().


public class java_07 {
    public static void main(String[] args) {
        Livro livro = new Livro("Garoto de Pijamas!");
        Livro.Capa capa = livro.new Capa();

        capa.imprimirTitulo();
    }
}

class Livro {
    String titulo;

    Livro(String titulo) {
        this.titulo = titulo;
    }

    class Capa {
        void imprimirTitulo() {
            System.out.println("Capa do livro: " + titulo);
        }
    }
}
