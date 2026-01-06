<?php 
    session_start();
    require_once '../config/db.php';
    require_once '../config/loginAuth.php';

    $error = '';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';

        $sql = 'SELECT * FROM usuarios WHERE email = :email';
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':email', $email);
        $stmt->execute();

        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($usuario && password_verify($password, $usuario['senha'])) {
            $_SESSION['user_id'] = $usuario['id'];
            $_SESSION['user_name'] = $usuario['nome'];

            header('Location: dashboard.php');
            exit;
        } else {
            $error = 'Login inválido!';
        }

    }
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Área de Login</title>
</head>

<body>
    <h2>Login</h2>
    <form action="" method="POST">
        <input type="email" name="email" placeholder="Digite o seu e-mail:">
        <input type="password" name="password" placeholder="Digite a sua senha:">
        <button type="submit">Entrar</button>
    </form>
    <a href="cadastro.php">Criar conta</a>
    <?php if ($error) : ?>
    <p><?= $error ?></p>
    <?php endif ?>
</body>

</html>