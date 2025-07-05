// 🧪 Exercício 3 – Local Inner Class
// 1. Crie uma classe chamada Pedido com um método processar().
// 2. Dentro desse método, declare uma inner class local chamada Pagamento.
// 3. Essa classe deve ter um método confirmar() que imprime "Pagamento confirmado!".
// 4. Crie um objeto Pagamento dentro do método e chame confirmar().

public class java_08 {
    public static void main (String[] args) {
        Pedido pedido = new Pedido();
        pedido.processar();
    }
}

class Pedido {
    void processar() {
        class Pagamento {
            void confirmado() {
                System.out.println("Pagamento confirmado!");
            }
        }
        Pagamento pagamento = new Pagamento();
        pagamento.confirmado();
    }
}