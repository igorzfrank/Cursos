<?php 
    $host = 'localhost';
    $dbname = 'treino_bd';
    $user = 'root';
    $password = '';

    $errorMensage = [];
    $sucessMensage = '';

    try {
        $pdo = new PDO (
            "mysql:host=$host;dbname=$dbname;charset=utf8",
            $user,
            $password
        );
    } catch (PDOException $e) {
        echo "Erro de conexão: " . $e->getMessage();
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nome = $_POST['nome'] ?? '';
        $email = trim($_POST['email'] ?? '');
        $idade = $_POST['idade'] ?? '';

        if(empty($nome)) {
            $errorMensage[] = "O campo Nome é obrigatório!";
        }

        if(empty($email)) {
            $errorMensage[] = "O campo E-mail é necessário!";
        }

        if(empty($idade)) {
            $errorMensage[] = "O campo Idade é necessário!";
        }

        if(empty($errorMensage)) {
            $sql = "INSERT INTO pessoas (nome, email, idade) VALUE (:nome, :email, :idade)";
            
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':nome', $nome);
            $stmt->bindValue(':email', $email);
            $stmt->bindValue(':idade', $idade);

            $stmt->execute();

            $sucessMensage = 'Dados cadastrados!';

            $stmt->execute();

            $sucessMensage = 'Dados cadastrados!';

            // redireciona após sucesso
            header("Location: index.php?sucesso=1");
            exit;
        }
    }

    $sql = "SELECT * FROM pessoas ORDER BY idade ASC";
    $stmt = $pdo->query($sql);
    $pessoas = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>Cadastro e Lista de Pessoas</h2>

    <form style="border: 1px solid black; padding: 10px;" action="" method="POST">
        <input type="text" name="nome" placeholder="Nome">
        <input type="email" name="email" placeholder="E-mail">
        <input type="number" name="idade" placeholder="Idade">
        <button type="submit">Enviar</button>
    </form>

    <?php if(!empty($errorMensage)): ?>
    <ul style="color: red;">
        <?php foreach($errorMensage as $error) : ?>
        <li><?= $error ?></li>
        <?php endforeach ?>
    </ul>
    <?php endif ?>

    <?php if($sucessMensage) : ?>
    <p style="color: green;">
        <?= $sucessMensage ?>
    </p>
    <?php endif ?>

    <div style="padding: 10px; border: 1px solid black;">
        <?php if(empty($pessoas)) : ?>
        <p>Nenhum registro encontrado.</p>
        <?php else : ?>
        <?php foreach ($pessoas as $pessoa) : ?>
        <?php if($pessoa['idade'] >= 18) : ?>
        <p>
            <?= $pessoa['nome'] . ' - ' . $pessoa['email'] . ' - ' . $pessoa['idade'] . ' - Adulto.'?>
        </p>
        <?php else : ?>
        <p>
            <?= $pessoa['nome'] . ' - ' . $pessoa['email'] . ' - ' . $pessoa['idade'] . ' - Menor de Idade.'?>
        </p>
        <?php endif ?>
        <?php endforeach ?>
        <?php endif ?>
    </div>
</body>

</html>