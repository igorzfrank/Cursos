<?php 
    session_start();
    require_once '../config/auth.php';
    require_once '../config/db.php';

    $userId = $_SESSION['user_id'];
    $errorMensage = '';
    $sucessMessage = '';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $tarefa = $_POST['tarefa'] ?? '';

        if(empty($tarefa)) {
            $errorMensage = 'O campo não pode estar em branco.';
        }

        if(empty($errorMensage)) {
            $sql = 'INSERT INTO tarefas (usuario_id, titulo) VALUE (:usuario_id, :titulo)';

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':usuario_id', $userId);
            $stmt->bindValue(':titulo', $tarefa);
            $stmt->execute();

            $sucessMessage = 'Tarefa cadastrada com sucesso!';
            header('Location: dashboard.php?sucuess');
            exit;
        }
    }

    $sql = "SELECT * FROM tarefas WHERE usuario_id = :usuario_id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':usuario_id', $userId, PDO::PARAM_INT);
    $stmt->execute();

    $tarefas = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>

<body>
    <h2>Dashboard</h2>

    <p>Bem-vindo, <?= $_SESSION['user_name'] ?></p>

    <a href="../config/logout.php">Sair</a>

    <form action="" method="POST">
        <input type="text" name="tarefa" placeholder="Nova tarefa...">
        <button type="submit">Criar</button>
    </form>

    <?php if (empty($tarefas)) : ?>
    <p>Não há tarefas registradas.</p>
    <?php else : ?>
    <?php foreach ($tarefas as $tarefa) : ?>
    <p>
        <?= $tarefa['titulo'] ?><a href="../config/delete.php?id=<?= $tarefa['id'] ?>">Excluir</a>
    </p>
    <?php endforeach?>
    <?php endif ?>
</body>

</html>