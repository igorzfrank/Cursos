// 🧪 Exercício 5 – Exercício completo (todos os tipos)
// 1. Crie uma classe chamada Aplicativo.
// 2. Dentro dela:
//    a) Crie uma inner class regular chamada Configuracoes.
//    b) Crie uma static nested class chamada Versao com método exibirVersao().
// 3. Dentro da classe Aplicativo, crie um método iniciar() que:
//    a) Cria uma Local Inner Class chamada Log com método registrar()
//    b) Usa uma Anonymous Inner Class para implementar uma interface chamada Notificacao
// 4. Na main, instancie a classe Aplicativo, use as outras classes internas e teste todos os métodos.

public class java_10 {
    public static void main (String[] args) {
        Aplicativo aplicativo = new Aplicativo();

        Aplicativo.Configuracoes.Versao versao = new Aplicativo.Configuracoes.Versao();
        versao.exibirVersao();

        aplicativo.iniciar();
    }
}

class Aplicativo {
    class Configuracoes {
        static class Versao {
            void exibirVersao() {
                System.out.println("Vesão 4.0");
            }
        }
    }

    void iniciar() {
        class Log {
            void registrar() {
                System.err.println("Registrado.");
            }
        }

        Log log = new Log();
        log.registrar();

        Notificacao notificacao = new Notificacao() {
            public void notificar() {
                System.out.println("Notificação!");
            }
        };
        notificacao.notificar();
    }
}

interface Notificacao {
    void notificar();
}