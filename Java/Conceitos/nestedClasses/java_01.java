package Java.Conceitos.nestedClasses;

// 🧪 Exercício 1 – Static Nested Class
// 1. Crie uma classe externa chamada Computador.
// 2. Dentro dela, crie uma classe estática chamada PlacaMae.
// 3. A classe PlacaMae deve ter um método exibirInfo() que imprime "Placa-mãe ASUS".
// 4. Na main, instancie PlacaMae diretamente (sem instanciar Computador) e chame exibirInfo().

public class java_01 {
    public static void main(String[] args) {
        Computador.PlacaMae placaMae = new Computador.PlacaMae();

        placaMae.exibirInfo();
    }
}

class Computador {

    static class PlacaMae {
        void exibirInfo() {
            System.out.println("Placa-mãe Asus");
        }
    }
}