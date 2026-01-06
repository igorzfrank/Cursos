<?php 
    session_start();
    require_once '../config/db.php';

    if(isset($_SESSION['usuario_id'])) {
        header('Location: ../public/dashboard.php');
        exit;
    }

    $error = '';

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = $_POST['email'] ?? '';
        $senha = $_POST['senha'] ?? '';

        $sql = "SELECT * FROM usuarios WHERE email = :email";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':email', $email);
        $stmt->execute();

        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        if($usuario && password_verify($senha, $usuario['senha'])) {
            $_SESSION['usuario_id'] = $usuario['id'];
            $_SESSION['usuario_nome'] = $usuario['nome'];

            header('Location: dashboard.php');
            exit;
        } else {
            $error = 'Login inválido!';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <h2>Login</h2>
    <form action="" method="POST">
        <input type="email" name="email" placeholder="E-mail">
        <input type="password" name="senha" placeholder="Senha">
        <button type="submit">Entrar</button>
    </form>
    <a href="cadastro.php">Crie sua conta</a>
    <?php if($error) : ?>
    <p style="color: red;">
        <?= $error ?>
    </p>
    <?php endif ?>
</body>

</html>