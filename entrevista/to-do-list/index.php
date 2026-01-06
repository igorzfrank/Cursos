<?php 
    $host = 'sql109.infinityfree.com';
    $dbname = 'if0_40819251_to_do_db';
    $user = 'if0_40819251';
    $password = 'pbz3aIhQCV';

    $errorMensage = [];
    $sucessMensage = '';
    $edit = '';

    try {
        $pdo = new PDO (
            "mysql:host=$host;dbname=$dbname;charset=utf8",
            $user,
            $password
        );
    } catch (PDOException $e) {
        echo "Erro de conexão: " . $e->getMessage();
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $tarefa = $_POST['tarefa'] ?? '';
        $tempo = $_POST['tempo'] ?? '';
        $prioridade = $_POST['prioridade'] ?? '';

        if(empty($tarefa)) {
            $errorMensage[] = "É importante descrever a TAREFA!";
        }

        if(empty($tempo)) {
            $errorMensage[] = "É importante determinantar um TEMPO para a tarefa!";
        }

        if(empty($prioridade)) {
            $errorMensage[] = "Dê uma PRIORIDADE para sua tarefa!";
        }

        if(empty($errorMensage)) {
            $id = $_GET['id'] ?? null;

            if($id) {
                $sql = "DELETE FROM tarefa WHERE id = :id";
                $stmt = $pdo->prepare($sql);
                $stmt->bindValue(':id', $id);
                $stmt->execute();
            }
            
            $sql = "INSERT INTO tarefa (nome, tempo, prioridade) VALUE (:tarefa, :tempo, :prioridade)";

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':tarefa', $tarefa);
            $stmt->bindValue(':tempo', $tempo);
            $stmt->bindValue(':prioridade', $prioridade);

            $stmt->execute();

            $sucessMensage = "Tarefa cadastrada com Sucesso!";

            header("Location: index.php?sucesso");
            exit;
        }
    }

    $sql = "SELECT * FROM tarefa ORDER BY prioridade DESC";
    $stmt = $pdo->query($sql);
    $tarefas = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List - PHP</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="box">
        <form class="form-group" action="" method="POST">
            <div>
                <label>Tarefa:
                    <input type="text" name="tarefa" placeholder="tarefa">
                </label>
            </div>
            <div>
                <label>Tempo
                    <input type="number" name="tempo" placeholder="tempo">
                </label>
            </div>
            <div>
                <label>Prioridade:
                    <input type="number" name="prioridade" max="10" min="1" placeholder="1-10">
                </label>
            </div>
            <button type="submit">Salvar</button>
        </form>
        <div class="tarefas">
            <?php if(empty($tarefas)) : ?>
            <p>Não há tarefas registadas.</p>
            <?php else : ?>
            <?php foreach($tarefas as $tarefa): ?>
            <div class="tarefa">
                <p>
                    Tarefa: <span class="tarefa" data-id="<?= $tarefa['id'] ?>"><?=  $tarefa['nome']?></span> - Tempo:
                    <span class="tempo" data-id="<?= $tarefa['id'] ?>"><?=  $tarefa['tempo']?></span> - (1/10):
                    <span class="prioridade" data-id="<?= $tarefa['id'] ?>"><?=  $tarefa['prioridade']?></span>
                </p>
                <div class="btn-group">
                    <button class="openEdit" data-id="<?= $tarefa['id'] ?>">Editar</button>
                    <button class="openModal" data-id="<?= $tarefa['id'] ?>">Excluir</button>
                </div>
            </div>
            <?php endforeach ?>

            <?php endif ?>
        </div>
    </div>
    <div class="modal">
        <div class="box-modal">
            <h2>Deseja mesmo Excluir o item?</h2>
            <div>
                <a href="" class="confirmDelete btn">
                    Excluir
                </a>
                <button class="closeModal btn">Fechar</button>
            </div>
        </div>
    </div>
    <div class="editModal">
        <button class="closeEditModal btn-danger">X</button>
        <form action="" method="POST">
            <div>
                <label>Tarefa:
                    <input type="text" name="tarefa" placeholder="tarefa">
                </label>
            </div>
            <div>
                <label>Tempo
                    <input type="number" name="tempo" placeholder="tempo">
                </label>
            </div>
            <div>
                <label>Prioridade:
                    <input type="number" name="prioridade" max="10" min="1" placeholder="1-10">
                </label>
            </div>
            <button type="submit">Salvar</button>
        </form>
    </div>
</body>

<script src="script.js"></script>

</html>