import javax.swing.*;
import javax.swing.table.AbstractTableModel;
import javax.swing.table.TableCellEditor;
import javax.swing.table.TableCellRenderer;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main extends JFrame {
    private JFrame frame;
    private JTextField inputText;
    private JButton sendButton;
    private JPanel painelSuperior;
    private JTable tabela;
    private TarefaTableModel modeloTabela;
    private JScrollPane scrollPane;

    public Main() {
        List<Tarefa> tarefas = new ArrayList<>();

        frame = new JFrame("SUPER TO-DO-LIST!");
        frame.setLayout(new BorderLayout());

        modeloTabela = new TarefaTableModel(tarefas);

        tabela = new JTable(modeloTabela);
        scrollPane = new JScrollPane(tabela);

        tabela.getColumnModel().getColumn(1).setCellRenderer(new ButtonRenderEditor(tabela, modeloTabela));
        tabela.getColumnModel().getColumn(1).setCellEditor(new ButtonRenderEditor(tabela, modeloTabela));


        painelSuperior = new JPanel(new FlowLayout());
        inputText = new JTextField(20);
        sendButton = new JButton("Nova Tarefa");

        painelSuperior.add(inputText);
        painelSuperior.add(sendButton);

        frame.add(painelSuperior, BorderLayout.NORTH);
        frame.add(scrollPane, BorderLayout.CENTER);

        sendButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String text = inputText.getText().trim();
                if(!text.isEmpty()) {
                    Tarefa novaTarefa = new Tarefa(text);

                    tarefas.add(novaTarefa);

                    modeloTabela.fireTableRowsInserted(tarefas.size() - 1, tarefas.size() - 1);

                    inputText.setText("");
                }
            }
        });

        // frame.setSize(720, 480);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack(); // Adapta o tamanho da tela
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        new Main();
    }
}

class Tarefa {
    String descricao;

    Tarefa(String descricao) {
        this.descricao = descricao;
    }

    void setTarefa(String descricao) {
        this.descricao = descricao;
    }

    String getTarefa() {
        return this.descricao;
    }
}

class TarefaTableModel extends AbstractTableModel {
    private List<Tarefa> tarefas;

    private final String[] colunas = {"Descrição", "Ação"};

    public TarefaTableModel(List<Tarefa> tarefas) {
        this.tarefas = tarefas;
    }

    public void removerTarefa(int index) {
        tarefas.remove(index);
        fireTableRowsDeleted(index, index);
    }

    @Override
    public int getRowCount() {
        return tarefas.size();
    }

    @Override
    public int getColumnCount() {
        return colunas.length;
    }

    @Override
    public Object getValueAt(int rowIndex, int columnIndex) {
        Tarefa tarefa = tarefas.get(rowIndex);
        if (columnIndex == 0) {
            return tarefa.getTarefa();
        } else {
            return "remover";
        }
    }

    public boolean isCellEditable(int rowIndex, int columnIndex) {
        return columnIndex == 1;
    }

    public Class<?> getColumnClass(int columnIndex) {
        return String.class;
    }

}

class ButtonRenderEditor extends AbstractCellEditor implements TableCellEditor, TableCellRenderer {
    private JButton button;
    private int row;
    private JTable table;

    public ButtonRenderEditor(JTable table, TarefaTableModel model) {
        this.table = table;

        button = new JButton("Remover");
        button.addActionListener(e -> {
            int modelRow = table.convertRowIndexToModel(row);
            model.removerTarefa(modelRow);
            fireEditingStopped();
        });
    }

    @Override
    public Component getTableCellEditorComponent(JTable table, Object value, boolean isSelected, int row, int column) {
        this.row = row;
        return button;
    }

    @Override
    public Object getCellEditorValue() {
        return null;
    }

    @Override
    public Component getTableCellRendererComponent(JTable table, Object value, boolean isSelected, boolean hasFocus, int row, int column) {
        return button;
    }
}