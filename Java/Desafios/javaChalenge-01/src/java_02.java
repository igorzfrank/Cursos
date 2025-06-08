import java.util.Scanner;

// Conversor de temperatura
// Receba uma temperatura em Celsius e converta para Fahrenheit.
// Fórmula: F = (C × 1.8) + 32
public class java_02 {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Qual a temperatura na sua cidade em ºC? ");
        double temp = scanner.nextDouble();

        double tempF = (temp * 1.8) + 32;

        System.out.print("Convertendo os " + temp + " ªC temos " + tempF + "ªF");

        scanner.close();
    }
}
