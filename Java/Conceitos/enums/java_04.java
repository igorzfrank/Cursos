// 🧪 Ex 4 – Criar enum Prioridade com:
//    ALTA(3), MEDIA(2), BAIXA(1)
// 1. Crie atributo `nivel` no enum e getter correspondente
// 2. Crie classe Tarefa com título e prioridade
// 3. Crie um array/lista de tarefas e imprima as que têm prioridade ALTA

import java.util.ArrayList;

public class java_04 {
    public static void main (String[] args) {
        ArrayList<Tarefa> tarefas = new ArrayList<>();
        tarefas.add(new Tarefa("Passear com o cachorro", Prioridade.MEDIA));
        tarefas.add(new Tarefa("Tirar o Lixo", Prioridade.ALTA));
        tarefas.add(new Tarefa("Fazer compras", Prioridade.ALTA));
        tarefas.add(new Tarefa("Varrer a casa", Prioridade.BAIXA));

        for (Tarefa t : tarefas) {
            if(t.prioridade.getNivel() == 3) {
                t.exibir();
            }
        }
    }
}

class Tarefa {
    String titulo;
    Prioridade prioridade;

    Tarefa(String titulo, Prioridade prioridade) {
        this.titulo = titulo;
        this.prioridade = prioridade;
    }

    void exibir() {
        System.out.println("Tarefa: " + titulo + " - Prioridade: " + prioridade.getNivel());
    }
}

enum Prioridade {
    ALTA(3),
    MEDIA(2),
    BAIXA(1);

    int nivel;

    Prioridade(int nivel) {
        this.nivel = nivel;
    }

    int getNivel() {
        return nivel;
    }
}
