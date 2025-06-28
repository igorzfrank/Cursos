package Java.Conceitos.finalKeyword;

// 🧪 Exercício 3 – Classe `final` não herdável
// 1. Crie uma classe `final` chamada `SistemaSeguranca`.
// 2. Adicione um método `public void autenticar()` que imprime "Autenticado com sucesso".
// 3. Tente criar uma classe `AvancadoSistemaSeguranca` que herda de `SistemaSeguranca`.
// 4. Observe o erro de compilação por tentar estender uma classe final.
// 5. Teste o método `autenticar()` na main com um objeto de `SistemaSeguranca`.

public class java_03 {
    public static void main(String[] args) {
        AvancadoSistemaSeguranca sistema = new AvancadoSistemaSeguranca();
        sistema.autenticar();
    }
}

final class SistemaSeguranca {
    public void autenticar() {
        System.out.println("Autenticado com sucesso.");
    }
}

class AvancadoSistemaSeguranca extends SistemaSeguranca {

}