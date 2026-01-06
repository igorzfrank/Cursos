<?php 
    $host = 'localhost';
    $dbname = 'treino_bd';
    $user = 'root';
    $password = '';

    $mensagemErro = [];
    $mensagemSucesso = '';

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
        $nome = $_POST['nome'] ?? '';
        $email = trim($_POST['email'] ?? '');
        $idade = $_POST['idade'] ?? '';

        if(empty($nome)) {
            $mensagemErro[] = 'O campo Nome é obrigatório!';
        };

        if(empty($email)) {
            $mensagemErro[] = 'O campo E-mail é obrigatório!';
        };
        
        if(empty($idade)) {
            $mensagemErro[] = 'O campo Idade é obrigatório!';
        }

        if(empty($mensagemErro)) {
            $sql = "INSERT INTO pessoas (nome, email, idade) VALUES (:nome, :email, :idade)";
            
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':nome', $nome);
            $stmt->bindValue(':email', $email);
            $stmt->bindValue(':idade', $idade);

            $stmt->execute();

            $mensagemSucesso = 'Cadastro realizado com sucesso!';
        }
    }

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h2>Cadastro de Pessoas</h2>

    <form action="" method="POST">
        <input type="text" name='nome' placeholder="Nome">
        <input type="email" name='email' placeholder="E-mail">
        <input type="number" name='idade' placeholder="Idade">
        <button type="submit">Enviar</button>
    </form>

    <?php if(!empty($mensagemErro)): ?>
    <ul style="color: red;">
        <?php foreach($mensagemErro as $error): ?>
        <li><?= $error ?></li>
        <?php endforeach?>
    </ul>
    <?php endif ?>

    <?php if($mensagemSucesso): ?>
    <p style="color: green;">
        <?= $mensagemSucesso ?>
    </p>
    <?php endif ?>
</body>

</html>