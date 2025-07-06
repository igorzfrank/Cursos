import br.treinamento.exemplos.*; // utilizar para puxar todas as classes dentro da pasta
// import br.treinamento.exemplos.Calculadora; - Neste caso puxa somante os itens da class Calculadora

// 🧪 Exercício 3 – Import com * vs específico
// 1. Crie um pacote `br.treinamento.exemplos`
// 2. Adicione duas classes: `Calculadora` e `Conversor`
// 3. Em uma classe principal fora do pacote, teste dois modos:
//    a) import br.treinamento.exemplos.*;
//    b) import br.treinamento.exemplos.Calculadora;
// 4. Explique quando usar cada tipo.

public class Main {
    public static void main(String[] args) {
        Calculadora calculadora = new Calculadora();
        calculadora.exibirCalculadora();

        Conversor conversor = new Conversor();
        conversor.exibirConversor();
    }   
}
