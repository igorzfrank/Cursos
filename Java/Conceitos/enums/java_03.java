// 🧪 Ex 3 – Criar enum Nivel com:
//    BAIXO("Baixo"), MEDIO("Médio"), ALTO("Alto")
// 1. Crie atributo privado `descricao` e um getter
// 2. No main, percorra todos os valores do enum com um for e imprima: BAIXO → Baixo


public class java_03 {
    public static void main(String[] args) {
        for(Nivel nivel : Nivel.values()) {
            System.out.println(nivel.getDescricao());
        }
    }
}

enum Nivel {
    BAIXO("Baixo"),
    MEDIO("Médio"),
    ALTO("Alto");

    private String descricao;

    Nivel(String descricao) {
        this.descricao = descricao;
    }

    String getDescricao() {
        return descricao;
    }
}