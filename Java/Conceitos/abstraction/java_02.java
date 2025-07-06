// 🧪 Ex 2 – Criar uma interface "Trabalhavel"
// 1. Crie a interface `Trabalhavel` com o método: `void trabalhar();`
// 2. Crie duas classes: `Desenvolvedor` e `Designer`, que implementam essa interface.
// 3. Em cada classe, implemente o método com uma mensagem diferente.
// 4. Crie uma classe `Empresa` com método `iniciarTrabalho(Trabalhavel t)`
//    que chama `t.trabalhar();`
// 5. Teste tudo no `main`, passando objetos diferentes para `iniciarTrabalho(...)`.

public class java_02 {
    public static void main(String[] args) {
        Empresa.iniciarTrabalho(new Designer());
    }
}

interface Trabalhavel {
    public void trabalhar();
}

class Desenvolvedor implements Trabalhavel {

    @Override
    public void trabalhar() {
        System.out.println("O Desenvolvedor está trabalhando...");
    }

}

class Designer implements Trabalhavel {

    @Override
    public void trabalhar() {
        System.out.println("O Designer está trabalhando...");
    }
}

class Empresa {
    public static void iniciarTrabalho(Trabalhavel t) {
        t.trabalhar();
    }
}