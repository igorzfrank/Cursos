package Java.Conceitos.nestedClasses;

public class java_06 {

    public static void main(String[] args) {
        Computador.Processador processador = new Computador.Processador();
        processador.mostrarDetalhes();
    }
}

class Computador {
    
    static class Processador {
        void mostrarDetalhes() {
            System.out.println("Processador i7");
        }
    }
}
