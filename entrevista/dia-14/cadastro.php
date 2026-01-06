<?php 
    $host = 'localhost';
    $dbname = 'login_db';
    $user = 'root';
    $password = '';

    $errorMenssage = '';
    $sucessMessage = '';

    try {
        $pdo = new PDO (
            "mysql:host=$host;dbname=$dbname;charset=utf8",
            $user,
            $password
        );
    } catch (PDOException $e) {
        echo 'Erro de comunicação: ' . $e->getMessage();
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nome = $_POST['nome'] ?? '';
        $email = trim($_POST['email'] ?? '');
        $senha = $_POST['senha'] ?? '';

        if (empty($nome) || empty($email) || empty($senha)) {
            $errorMenssage = 'Todos os campos são obrigatórios';
        } else {
            $sql = 'SELECT * FROM usuarios WHERE email = :email';

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(':email', $email);
            $stmt->execute();

            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if(empty($usuario['email'])) {
                $hash = password_hash($senha, PASSWORD_DEFAULT);
    
                $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)";
    
                $stmt = $pdo->prepare($sql);
                $stmt->bindValue(':nome', $nome);
                $stmt->bindValue(':email', $email);
                $stmt->bindValue(':senha', $hash);
                $stmt->execute();
    
                $sucessMessage = 'Usuário Cadastrado com Sucesso!';
            } else {
                $errorMenssage = 'E-mail já cadastrado.';
            }



        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>

<body>
    <h2>Cadastro</h2>
    <form action="" method="POST">
        <input type="text" name="nome" placeholder="Nome">
        <input type="email" name="email" placeholder="E-mail">
        <input type="password" name="senha" placeholder="Senha">
        <button type="submit">Cadastrar</button>
    </form>
    <?php if($errorMenssage) : ?>
    <p style="color: red;">
        <?= $errorMenssage ?>
    </p>
    <?php endif ?>
    <?php if($sucessMessage): ?>
    <p>
        <?= $sucessMessage ?>
    </p>
    <?php endif ?>
</body>

</html>