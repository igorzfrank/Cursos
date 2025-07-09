// 🧪 Ex 2 – Criar classe Produto com encapsulamento e validação
// 1. Crie a classe `Produto` com atributos privados:
//    - String nome
//    - double preco
// 2. Crie os métodos:
//    - `getNome()` e `setNome(String)`
//    - `getPreco()` e `setPreco(double)`
//    - No setter de preço, o valor só pode ser aceito se for maior que zero
// 3. Teste a classe criando produtos com preço válido e inválido.


public class java_02 {
    public static void main(String[] args) {
        Produto impressora = new Produto();
        impressora.setNome("Impressora");
        impressora.setPreco(599.99);
        impressora.getNome();
        impressora.getPreco();

        Produto bala = new Produto();
        bala.setNome("Bala Juquinha");
        bala.setPreco(-2);
        bala.getNome();
        bala.getPreco();
    }
}

class Produto {
    private String nome;
    private double preco;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void getNome() {
        System.out.println("Nome: " + nome);
    }

    public void setPreco(double preco) {
        if(preco > 0) {
            this.preco = preco;
        }
    }

    public void getPreco(){
        System.out.println("Preco: " + preco);
    }
}
