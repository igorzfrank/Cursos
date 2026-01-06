<?php 
    $host = "localhost";
    $dbname = 'treino_bd';
    $user = 'root';
    $password = '';

    try {
        $pdo = new PDO (
            "mysql:host=$host;dbname=$dbname;charset=utf8",
            $user,
            $password
        );
    } catch (PDOException $e) {
        echo "Erro de conexão: " . $e->getMessage();
    }
    
    $id = $_GET['id'] ?? null;

    $sql = "SELECT * FROM pessoas WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();

    $pessoa = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $idade = $_POST['idade'];

        $sql = "UPDATE pessoas 
                SET nome = :nome, 
                email = :email, 
                idade = :idade 
                WHERE id = :id";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':nome', $nome);
        $stmt->bindValue(':email', $email);
        $stmt->bindValue(':idade', $idade);
        $stmt->bindValue(':id', $id);
        $stmt->execute();

        header('Location: index.php');
        exit;
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar</title>
</head>

<body>
    <div>
        <h2>Edição</h2>
        <form action="" method="POST">
            <input type="text" name="nome" value="<?= $pessoa['nome'] ?>">
            <input type="email" name="email" value="<?= $pessoa['email'] ?>">
            <input type="number" name="idade" value="<?= $pessoa['idade'] ?>">
            <button type="submit">Alterar</button>
        </form>
    </div>
</body>

</html>