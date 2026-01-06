// 🧪 Ex 2 – Criar enum StatusPedido com:
//    PROCESSANDO, ENVIADO, ENTREGUE, CANCELADO
// 1. Crie uma classe Pedido com atributos: int id, StatusPedido status
// 2. Crie método avancarStatus() para alterar o status para o próximo (usando if ou switch)
// 3. No main, crie um pedido e mude seu status passo a passo, imprimindo a cada etapa


public class java_02 {
    public static void main(String[] args) {
        Pedido pedido = new Pedido();
        pedido.setStatus(StatusPedido.PROCESSANDO);
        pedido.avancarStatus();
        pedido.avancarStatus();
        pedido.avancarStatus();
    }
}

class Pedido {
    int id;
    StatusPedido status;

    void setStatus(StatusPedido status) {
        this.status = status;
    }

    void avancarStatus() {
        switch (status) {
            case PROCESSANDO:
                this.status = StatusPedido.ENVIADO;
                break;
            case ENVIADO:
                this.status = StatusPedido.ENTREGUE;
                break;
            case ENTREGUE:
                this.status = StatusPedido.CANCELADO;
                break;
            default:
                break;
        }
        System.out.println("O Pedido agora está " + this.status);
    }
}

enum StatusPedido {
    PROCESSANDO,
    ENVIADO,
    ENTREGUE,
    CANCELADO
}