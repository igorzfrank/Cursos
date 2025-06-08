// Senha com tentativas
// Peça uma senha (ex: “1234”) e dê até 3 tentativas para acertar.

import java.util.Scanner;

public class java_03 {
    public static void main (String[] args) {
     Scanner scanner = new Scanner (System.in);
     int correctPassword = 2345;
     int i = 0;
     do {
        System.out.print("Digite a senha correta (Numero de 4 digitos): ");
        int password = scanner.nextInt();
        if (password == correctPassword) {
            System.out.println("SENHA CORRETA, ACESSO LIBERADO!");
            break;
        } else {
            System.out.println("SENHA ERRADA, TENTE NOVAMENTE! (TENTATIVAS RESTANTES " + (2-i) + " )");
            i++;
        }
     } while ( i < 3);
     if (i == 3) {
        System.out.println("Limite de tentativas ESGOTADO, tente novamente mais tarde!");
     }
     scanner.close();

    }
}
