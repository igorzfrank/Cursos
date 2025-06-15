// Tarefa:
// 1. Peça os coeficientes a, b e c da equação ax² + bx + c.
// 2. Calcule o delta: b² - 4ac
// 3. Se delta ≥ 0, calcule as duas raízes reais:
//    - x1 = (-b + √delta) / (2a)
//    - x2 = (-b - √delta) / (2a)
// 4. Se delta < 0, mostre: "Não existem raízes reais."
//
// Dica: Use `Math.sqrt()` para a raiz quadrada.

import java.util.Scanner;

public class java_10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o coeficiente de 'a': ");
        double a = scanner.nextDouble();
        System.out.print("Digite o coeficiente de 'b': ");
        double b = scanner.nextDouble();
        System.out.print("Digite o coeficiente de 'c': ");
        double c = scanner.nextDouble();
        double delta = Math.pow(b, 2)-(4*a*c);
        if(delta >= 0) {
            double x1 = (-b + Math.sqrt(delta))/(2*a);
            double x2 = (-b - Math.sqrt(delta))/(2*a);
            System.out.println("A Primeira Raiz é: " + x1);
            System.out.println("A Segunda Raiz é : " + x2);
        } else {
            System.out.println("Não existem raizes reais.");
        }
    }
}
