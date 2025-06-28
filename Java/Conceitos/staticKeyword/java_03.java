package Java.Conceitos.staticKeyword;

// 🧪 Exercício 3 – Constante com static final
// 1. Crie uma classe chamada Matematica.
// 2. Adicione uma constante `public static final double PI = 3.14159`.
// 3. Crie um método `public static double areaCirculo(double raio)` que retorna PI * raio².
// 4. Teste o cálculo na main usando o método sem criar objeto.

public class java_03 {
    public static void main(String[] args) {
        System.out.println("A área do circulo é igual a " + Matematica.areaCirculo(5));
    }
}

class Matematica {
    public static final double PI = 3.14159;

    public static double areaCirculo(double raio) {
        return PI * Math.pow(raio, 2);
    }
}