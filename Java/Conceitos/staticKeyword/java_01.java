package Java.Conceitos.staticKeyword;

// 🧪 Exercício 1 – Contador de instâncias
// 1. Crie uma classe chamada Usuario.
// 2. Adicione um atributo `static int totalUsuarios`.
// 3. No construtor da classe, incremente `totalUsuarios` a cada novo objeto.
// 4. Adicione um método `static void exibirTotal()` que imprime a quantidade total.
// 5. Na main, crie 3 objetos Usuario e chame o método exibirTotal().

public class java_01 {
    public static void main (String[] args) {

        Usuario usuario1 = new Usuario();
        usuario1.exibirTotal();
        Usuario usuario2 = new Usuario();
        usuario2.exibirTotal();
        Usuario usuario3 = new Usuario();
        usuario3.exibirTotal();
    }
}

class Usuario {
    static int totalUsuarios = 0;

    public Usuario() {
        totalUsuarios++;
    }

    static void exibirTotal() {
        System.out.println("Total de usuários é " + totalUsuarios);
    }
}