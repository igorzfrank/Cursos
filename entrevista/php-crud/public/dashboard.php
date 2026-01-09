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
    <link rel="stylesheet" href="../assets/style/style.css?v=<?php echo time(); ?>">
    <!-- <link rel="stylesheet" href="../assets/style/style.css"> -->
</head>

<body class="dashboard">
    <div class="menu">
        <a href="../index.php">
            <img src="../assets/img/logo.svg" alt="Logo MyTask's">
        </a>
        <a class="logout" href="../config/logout.php">Desconectar <img src="../assets/img/logout.svg" alt=""></a>
    </div>
    <div class="container">

        <h2>Olá, <?= $_SESSION['user_name'] ?>!</h2>

        <form action="" method="POST">
            <input type="text" name="tarefa" placeholder="Nova tarefa...">
            <button class="btn btn-secondary" type="submit">CRIAR</button>
        </form>

        <?php if (empty($tarefas)) : ?>
        <div class="tarefa">
            <p>Não há tarefas registradas.</p>
        </div>
        <?php else : ?>
        <?php foreach ($tarefas as $tarefa) : ?>
        <div class="tarefa 
            <?php if($tarefa['concluido'] == 1) : ?>
                <?= 'is-checked' ?>
            <?php endif ?>
        " data-id="<?= $tarefa['id'] ?>">
            <p>
                <?= $tarefa['titulo']?>
            </p>
            <a class="edit none" href="../config/edit.php?id=<?= $tarefa['id'] ?>">Editar</a>
            <a href="../config/delete.php?id=<?= $tarefa['id'] ?>"><img src="../assets/img/trash.svg" alt=""></a>
        </div>
        <?php endforeach?>
        <?php endif ?>
    </div>

    <script type="module" src="../assets/js/main.js"></script>
</body>

</html>