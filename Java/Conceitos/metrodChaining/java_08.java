// 🧪 Ex 3 – Builder para um Email com simulação de envio
// 1. Crie a classe `Email` com os atributos:
//    - remetente, destinatario, assunto, corpo
// 2. Crie a classe `EmailBuilder` com métodos:
//    - `de(String remetente)`
//    - `para(String destinatario)`
//    - `comAssunto(String assunto)`
//    - `comCorpo(String corpo)`
//    - `enviar()` → imprime "Email enviado para X com assunto Y"
// 3. Teste o envio do email em uma única chamada encadeada.

public class java_08 {
    public static void main(String[] args) {
        Email email = new EmailBuilder().setRemetente("Flavio")
        .setDestinatario("Augusto")
        .setAssunto("Envio relatorio")
        .setCorpo("Olá, bom dia. Me envie por favor o relatorio ABC, até dia 08/07/2025. Muito obriado. Att Flavio.")
        .enviar();
    }
}

class EmailBuilder {
    String remetente;
    String destinatario;
    String corpo;
    String assunto;

    EmailBuilder setRemetente(String remetente) {
        this.remetente = remetente;
        return this;
    }

    EmailBuilder setDestinatario(String destinatario) {
        this.destinatario = destinatario;
        return this;
    }

    EmailBuilder setCorpo(String corpo) {
        this.corpo = corpo;
        return this;
    }

    EmailBuilder setAssunto(String assunto) {
        this.assunto = assunto;
        return this;
    }

    Email enviar() {
        return new Email(remetente, destinatario, corpo, assunto);
    }


}

class Email {
    String remetente;
    String destinatario;
    String corpo;
    String assunto;

    Email(String remetente, String destinatario, String corpo, String assunto) {
        this.remetente = remetente;
        this.destinatario = destinatario;
        this.corpo = corpo;
        this.assunto = assunto;

        System.out.println("Remetente: " + remetente + " - Destinario: " + destinatario + " - Assunto: " + assunto + " - Corpo: " + corpo);
    }
}