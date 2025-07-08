// 🧪 Ex 1 – Criar um builder para um endereço completo
// 1. Crie a classe `Endereco` com os atributos:
//    - String rua, String cidade, String estado, String cep
// 2. Crie a classe `EnderecoBuilder` com os métodos:
//    - `comRua(String rua)`
//    - `comCidade(String cidade)`
//    - `comEstado(String estado)`
//    - `comCep(String cep)`
//    - `build()` → retorna o objeto `Endereco`
// 3. No main, use o builder para criar um endereço completo em uma única linha.


public class java_06 {
    public static void main(String[] args) {
        Endereco endereco = new EnderecoBuilder().setRua("Alfredo Lopes").setCidade("Azul City").setEstado("Minalves").setCep("88445-205").build();
        endereco.exibir();
    }
}

class EnderecoBuilder {
    String rua;
    String cidade;
    String estado;
    String cep;

    EnderecoBuilder setRua(String rua) {
        this.rua = rua;
        return this;
    }

    EnderecoBuilder setCidade(String cidade) {
        this.cidade = cidade;
        return this;
    }

    EnderecoBuilder setEstado(String estado) {
        this.estado = estado;
        return this;
    }

    EnderecoBuilder setCep(String cep) {
        this.cep = cep;
        return this;
    }

    Endereco build() {
        return new Endereco(rua, cidade, estado, cep);
    }
}

class Endereco {
    String rua;
    String cidade;
    String estado;
    String cep;

    Endereco(String rua, String cidade, String estado, String cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }

    void exibir() {
        System.out.println("Rua: " + rua + " - Cidade: " + cidade + " - Estado: " + estado + " - CEP: " + cep);
    }
}