package Java.Conceitos.acessSpecifiers;

// 🧪 Exercício 5 – Combinação de níveis de acesso
// 1. Crie uma classe Veiculo com:
//    - atributo `protected String tipo`
//    - atributo `private String modelo`
//    - método `public void setModelo(String modelo)`
//    - método `public String getModelo()`
// 2. Crie uma subclasse Carro que define o tipo como "Carro" e imprime tipo + modelo.
// 3. Crie um objeto Carro, defina o modelo e exiba os dados no console.

public class java_04 {
    public static void main(String[] args) {
        Carro carro = new Carro();
        carro.setModelo("Civic");
        carro.exibirInformacoes();
    }
}

class Veiculo {
    protected String tipo;
    private String modelo;

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getModelo() {
        return modelo;
    }
}

class Carro extends Veiculo {

    public Carro() {
        this.tipo = "Carro";
    }

    void exibirInformacoes() {
        System.out.println("Tipo: " + tipo + " - Modelo: " + getModelo());
    }
}