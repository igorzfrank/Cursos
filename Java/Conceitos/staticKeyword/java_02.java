package Java.Conceitos.staticKeyword;

// 🧪 Exercício 2 – Conversor estático
// 1. Crie uma classe chamada Conversor.
// 2. Crie um método `public static double celsiusParaFahrenheit(double celsius)`
//    que retorna o valor convertido.
// 3. Crie outro método `public static double fahrenheitParaCelsius(double fahrenheit)`.
// 4. Na main, chame os métodos sem instanciar a classe e imprima os resultados.


public class java_02 {
    public static void main (String[] args) {
        System.out.println(Conversor.celsiusParaFahrenheit(25));
        System.out.println(Conversor.fahrenheitParaCelsius(77));
    }
}

class Conversor {

    public static double celsiusParaFahrenheit(double celsius) {
        return (celsius * 1.8) + 32; 
    }

    public static double fahrenheitParaCelsius(double fahrenheit) {
        return (fahrenheit - 32) / 1.8;
    }
}
