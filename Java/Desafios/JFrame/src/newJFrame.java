import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class newJFrame extends JFrame {
    private JTextField inputText;
    private JButton sendText;
    private JTextArea textArea;
    private JPanel painelSuperior;
    private JScrollPane scroll;


    public static void main (String[] args) {
        new newJFrame();
    }

    public newJFrame() {
        super("Bloco de Notas!");

        setLayout(new BorderLayout());

        painelSuperior = new JPanel(new FlowLayout());
        inputText = new JTextField(20);
        sendText = new JButton("Enviar");

        painelSuperior.add(inputText);
        painelSuperior.add(sendText);
        add(painelSuperior, BorderLayout.NORTH);

        textArea = new JTextArea();
        textArea.setEditable(false);
        scroll = new JScrollPane(textArea);

        add(scroll, BorderLayout.CENTER);

        sendText.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String text = inputText.getText().trim(); // .trim() remove os espaços
                if(!text.isEmpty()) {
                    textArea.append("- " + text + '\n');
                    inputText.setText("");
                }
            }
        });

        setSize(720, 480);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }
}
