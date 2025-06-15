package Java.Conceitos.acessSpecifiers;

// 🧪 Exercício 3 – Uso de `protected` com herança

// 1. Crie uma classe chamada Animal com:
//    - atributo `protected String especie`
//    - método `protected void emitirSom()` que imprime "Som genérico"
// 2. Crie uma classe Cachorro que herda de Animal.
// 3. Na classe Cachorro, sobrescreva o método emitirSom() para imprimir "Au Au!".
// 4. Crie um objeto Cachorro e chame o método emitirSom na main.

public class java_03 {
    public static void main(String[] args) {
        Cachorro cachorro = new Cachorro("Xauxau");
        cachorro.emitirSom();
    }
}

class Animal {
    protected String especie;

    Animal(String especie) {
        this.especie = especie;
    }

    protected void emitirSom() {
        System.out.println("Som generico");
    }
}

class Cachorro extends Animal {
    Cachorro(String especie) {
        super(especie);
    }

    protected void emitirSom() {
        System.out.println("Au au!");
    }
}
