package cadastro.main;

// 🧪 Exercício 5 – Projeto completo com packages
// Estrutura desejada:
// - cadastro.model     → Pessoa.java (nome, idade, toString())
// - cadastro.service   → PessoaService.java (cadastrarPessoa(), listarPessoa())
// - cadastro.main      → Main.java

// 1. Em `PessoaService`, crie uma lista de Pessoa como atributo (ArrayList).
// 2. Método cadastrarPessoa() adiciona pessoa à lista.
// 3. Método listarPessoa() imprime todos da lista.
// 4. Em `Main`, use os métodos do serviço e teste o cadastro de 2 pessoas.


import java.util.Scanner;
import cadastro.service.PessoaService;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // PessoaService pessoaService = new PessoaService();

        for (int i = 0; i < 2; i++) {
            System.out.print("Cadastre o nome da " + (i+1) + " pessoa: ");
            String name = scanner.nextLine();
            System.out.print("Qual é a idade da " + (i+1) + " Pessoa: ");
            int idade = scanner.nextInt();
            PessoaService.cadastrarPessoa(name, idade);
            scanner.nextLine();
        }

        System.out.println("/---------------------------------------/");
        System.out.println("--- Confira a lista de Pessoas abaixo ---");
        System.out.println("/---------------------------------------/");
        PessoaService.listarPessoa();
    }
}
