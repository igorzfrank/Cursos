import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Main extends JFrame {
    private JLabel showName;
    private JTextField inputName;
    private JButton sendButton;

    public static void main(String[] args) {
        new Main();
    }

    public Main() {
        super("Titulo da Janela");

        inputName = new JTextField(10);
        sendButton = new JButton("Enviar");
        showName = new JLabel("Digite o seu nome!");

        sendButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String nome = inputName.getText();
                showName.setText("O nome digitado foi " + nome);
            }
        });

        setLayout(new java.awt.FlowLayout());
        add(inputName);
        add(sendButton);
        add(showName);
        setSize(1280, 720);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

}