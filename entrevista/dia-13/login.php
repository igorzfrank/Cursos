<?php 
    session_start();

    $errorMensage = '';

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = $_POST['email'] ?? '';
        $senha = $_POST['senha'] ?? '';

        if ($email === 'admin@email.com' && $senha === '123') {
            $_SESSION['logado'] = true;
        $_SESSION['email'] = $email;

        header('Location: dashboard.php');
        exit;
        } else {
        $errorMensage = 'E-mail ou senha inválidos';
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

    <?php if($errorMensage) : ?>
    <p style="color: red;"><?= $errorMensage ?></p>
    <?php endif ?>
</body>

</html>