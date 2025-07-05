// 🧪 Exercício 4 – Anonymous Inner Class
// 1. Crie uma interface chamada Saudacao com um método `void saudar()`.
// 2. Na main, crie uma variável do tipo Saudacao usando uma classe anônima.
// 3. A implementação deve imprimir "Olá, mundo!".
// 4. Chame o método saudar().

public class java_09 {
    public static void main(String[] args) {
        Saudacao saudacao = new Saudacao() {
            public void saudar() {
                System.out.println("Olá, mundo!");
            }
        };
        saudacao.saudar();
    }
}

interface Saudacao {
    void saudar();
}