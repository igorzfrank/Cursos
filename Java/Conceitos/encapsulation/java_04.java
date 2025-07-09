// 🧪 Ex 4 – Criar classe Livro com método de leitura
// 1. Crie `Livro` com:
//    - String titulo (privado)
//    - int paginas (privado)
//    - int paginasLidas (privado)
// 2. Crie métodos:
//    - `setTitulo`, `getTitulo`
//    - `setPaginas`, `getPaginas`
//    - `ler(int paginas)` → aumenta `paginasLidas`, mas não ultrapassa o total
//    - `getProgresso()` → retorna porcentagem de leitura
// 3. No main, simule a leitura de um livro e exiba o progresso.


public class java_04 {
    public static void main(String[] args) {
        Livro livro = new Livro();
        livro.setTitulo("O Garoto do Pijama Listrado");
        livro.setPaginas(325);
        livro.getTitulo();
        livro.getPaginas();
        livro.ler(50);
        livro.getProgresso();
        livro.ler(275);
        livro.getProgresso();
    }
}

class Livro {
    private String titulo;
    private int paginas;
    private int paginasLidas = 0;

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void getTitulo() {
        System.out.println("Titulo do Livro: " + titulo);
    }

    public void setPaginas(int paginas) {
        this.paginas = paginas;
    }

    public void getPaginas() {
        System.out.println("Paginas do Livro: " + paginas);
    }

    public void ler(int paginas) {
        if(paginas <= (this.paginas - paginasLidas)) {
            this.paginasLidas = paginasLidas + paginas;
        }
    }

    public void getProgresso() {
        System.out.println("Porcertagem de Leitura: " + ((paginasLidas * 100)/paginas));
    }
}