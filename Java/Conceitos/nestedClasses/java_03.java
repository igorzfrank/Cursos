package Java.Conceitos.nestedClasses;

// 🧪 Exercício 3 – Local Inner Class
// 1. Crie uma classe chamada Relatorio com um método gerar().
// 2. Dentro do método gerar(), crie uma classe interna local chamada Cabecalho.
// 3. Essa classe deve ter um método mostrar() que imprime "Relatório 2025".
// 4. Dentro de gerar(), crie um objeto de Cabecalho e chame mostrar().

public class java_03 {
    public static void main(String[] args) {
        Relatorio relatorio = new Relatorio();
        relatorio.gerar();
    }
}

class Relatorio {
    void gerar() {
        class Cabecalho {
            void mostrar() {
                System.out.println("Relatório 2025");
            }
        }

        Cabecalho cabecalho = new Cabecalho();
        cabecalho.mostrar();
    }
}