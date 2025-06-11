//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
import javax.swing.*;
import java.awt.event.*;
import java.util.Random;

public class JogoAdivinhacaoGUI extends JFrame {
    private int numeroSecreto;
    private int tentativas;
    private JTextField entrada;
    private JLabel resultado;

    public JogoAdivinhacaoGUI() {
        super("Jogo de Adivinhação");

        numeroSecreto = new Random().nextInt(100) + 1;
        tentativas = 0;

        entrada = new JTextField(10);
        JButton botao = new JButton("Tentar");
        resultado = new JLabel("Adivinhe um número entre 1 e 100");

        botao.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                int chute = Integer.parseInt(entrada.getText());
                tentativas++;
                if (chute < numeroSecreto) {
                    resultado.setText("Muito baixo!");
                } else if (chute > numeroSecreto) {
                    resultado.setText("Muito alto!");
                } else {
                    resultado.setText("Acertou em " + tentativas + " tentativas!");
                }
            }
        });

        setLayout(new java.awt.FlowLayout());
        add(entrada);
        add(botao);
        add(resultado);

        setSize(300, 120);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public static void main(String[] args) {
        new JogoAdivinhacaoGUI();
    }
}
