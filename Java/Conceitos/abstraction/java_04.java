// 🧪 Ex 4 – Criar interfaces múltiplas
// 1. Crie duas interfaces: `Nadador` e `Corredor`, cada uma com seu método:
//    - `void nadar();` e `void correr();`
// 2. Crie a classe `Triatleta` que implementa ambas
// 3. Crie um método `competir()` que chama os dois métodos
// 4. Teste tudo no `main`


public class java_04 {
    public static void main (String[] ars) {
        Triatleta triatleta = new Triatleta();
        triatleta.competir();
    }
}

interface Nadador {
    void nadar();
}

interface Corredor {
    void correr();
}

class Triatleta implements Nadador, Corredor {
    void competir() {
        nadar();
        correr();
    }
    @Override
    public void nadar() {
        System.out.println("Prova de Natação...");
    }
    @Override
    public void correr() {
        System.out.println("Prova de Corrida...");
    }
}