import empresa.utils.MensagemUtil;

// 🧪 Exercício 1 – Criar e usar um pacote simples
// 1. Crie um pacote chamado `empresa.utils`
// 2. Dentro dele, crie uma classe `MensagemUtil` com um método:
//    public static void exibirMensagem(String nome) { System.out.println("Olá, " + nome); }
// 3. Em outro arquivo (fora do pacote), crie uma classe com método main.
// 4. Importe `empresa.utils.MensagemUtil` e chame o método passando seu nome.

public class Main {
    public static void main (String[] args) {
        MensagemUtil.exibirMensagem("Igor");
    }    
}
