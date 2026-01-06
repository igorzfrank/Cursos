// 🧪 Ex 1 – Criar enum DiaDaSemana com valores:
//    SEGUNDA, TERCA, QUARTA, QUINTA, SEXTA, SABADO, DOMINGO
// 1. Crie uma variável com o valor de um dia da semana
// 2. Use um switch para imprimir uma mensagem diferente para cada dia
// 3. Verifique se o dia é final de semana (sábado ou domingo) e imprima "Descanso!"


public class java_01 {
    public static void main(String[] args) {
        DiaDaSemana dia = DiaDaSemana.DOMINGO;

        switch (dia) {
            case SEGUNDA:
                System.out.println("É Segunda-feira!");
                break;
            case TERCA:
                System.out.println("É Terça-feira!");
                break;
            case QUARTA:
                System.out.println("É Quarta-feira!");
                break;
            case QUINTA:
                System.out.println("É Quinta-feira!");
                break;
            case SEXTA:
                System.out.println("É Sexta-feira!");
                break;
            default:
                System.out.println("É dia de descanso"); 
                break;
        }
    }
}

enum DiaDaSemana {
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO,
    DOMINGO
}