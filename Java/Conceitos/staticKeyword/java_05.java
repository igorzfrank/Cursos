package Java.Conceitos.staticKeyword;

// 🧪 Exercício 5 – Erro comum com static
// 1. Crie uma classe chamada Exemplo.
// 2. Adicione um atributo não-static chamado `int valor = 10;`
// 3. Tente acessar `valor` dentro de um método static e observe o erro.
// 4. Corrija o erro criando um objeto da classe dentro do método static.

public class java_05 {
    public static void main (String[] args) {
        Exemplo.getValor();
    }
}

class Exemplo {
    int valor = 10;

    static void getValor() {
        Exemplo exemplo = new Exemplo();
        System.out.println("O valor é " + exemplo.valor);
    }
}
