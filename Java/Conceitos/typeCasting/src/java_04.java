// Exercício 4 – Upcasting
// Tarefa:
// 1. Crie um objeto `Cachorro`.
// 2. Faça upcasting para `Animal`.
// 3. Chame o método `emitirSom()`.

public class java_04 {
    public static void main (String[] args) {
        // Exercício 4 – Upcasting
        Cachorro cachorro = new Cachorro();
        cachorro.emitirSom();
        Animal a = cachorro;
        a.emitirSom();
        cachorro.emitirSom();
        // Continuação da classe acima.

        // Tarefa:
        // 1. Faça o cast de `Animal` para `Cachorro` usando `instanceof`.
        // 2. Depois chame o método `abanarRabo()` com segurança.

        Animal animal = new Cachorro();
        if (animal instanceof Cachorro) {
            Cachorro dog = (Cachorro) animal;
            dog.abanarRabo();
        } else {
            System.out.println("Não é um cachorro!");
        }

        // Tarefa:
        // 1. Crie um `Animal a = new Gato();`
        // 2. Tente fazer o cast: `Cachorro c = (Cachorro) a;`
        // 3. Veja o erro que acontece em tempo de execução.

        Animal newAnimal = new Gato();
        if (newAnimal instanceof Gato) {
            Gato gato = (Gato) newAnimal;
            // gato.abanarRabo();
        } else {
            System.out.println("Não é um gato!");
        }
    }
}

// Dado:
class Animal {
    void emitirSom() { System.out.println("Som genérico"); }
}

class Cachorro extends Animal {
    void emitirSom() { System.out.println("Latido"); }
    void abanarRabo() { System.out.println("Abanando o rabo"); }
}

class Gato extends Animal {

}