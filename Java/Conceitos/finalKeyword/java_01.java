package Java.Conceitos.finalKeyword;

// 🧪 Exercício 1 – Constante com `final`
// 1. Crie uma classe chamada `Matematica`.
// 2. Adicione um atributo `public static final double PI = 3.14159`.
// 3. Crie um método `public static double areaDoCirculo(double raio)` que retorna PI * raio * raio.
// 4. Na main, chame o método e imprima a área de um círculo com raio 5.
// 5. Tente alterar o valor de PI em algum lugar e observe o erro de compilação.


public class java_01 {
    public static void main(String[] args) {
        // Matematica.PI = 3.13;
        System.out.println("A área é igual a " + Matematica.areaDoCirculo(5));
    }
}

class Matematica {
    public static final double PI = 3.14159;

    public static double areaDoCirculo(double raio) {
        return PI * raio * raio;
    }
}