<?php 
    require_once '../config/db.php';

    $error = '';
    $sucess = '';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nome = $_POST['nome'] ?? '';
        $email = trim($_POST['email'] ?? '');
        $senha = $_POST['senha'] ?? '';

        if (empty($nome) || empty($email) || empty($senha)) {
            $error = 'Todos os campos são obrigatórios!';
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

                $sucess = 'Usuário cadastrado com sucesso!';
            } else {
                $error = 'E-mail já cadastrado.';
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
    <a href="../index.php">Voltar</a>
    <?php if($error) : ?>
    <p style="color: red;">
        <?= $error ?>
    </p>
    <?php endif ?>
    <?php if($sucess): ?>
    <p style="color: green;"><?= $sucess ?></p>
    <?php endif ?>
</body>

</html>