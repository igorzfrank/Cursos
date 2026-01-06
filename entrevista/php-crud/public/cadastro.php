<?php 
    require_once '../config/db.php';
    require_once '../config/loginAuth.php';

    $errors = [];
    $sucess = '';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $user = $_POST['user'] ?? '';
        $email = trim($_POST['email'] ?? '');
        $password = $_POST['password'] ?? '';
        $passwordConfirm = $_POST['passwordConfirm'] ?? '';

        if (empty($user)) {
            $errors[] = 'O campo Nome é obrigatório.';
        }

        if (empty($email)) {
            $errors[] = 'O campo E-mail é obrigatório.';
        }

        if (empty($password)) {
            $errors[] = 'O campo senha é obrigatório.';
        }

        if (empty($passwordConfirm)) {
            $errors[] = "Esse campo é obrigatório.";
        }

        if (empty($errors)) {
            if ($password === $passwordConfirm) {
                $sql = "SELECT * FROM usuarios WHERE email = :email";

                $stmt = $pdo->prepare($sql);
                $stmt->bindValue(':email', $email);
                $stmt->execute();

                $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

                if (empty($usuario['email'])) {
                    $hash = password_hash($password, PASSWORD_DEFAULT);

                    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)";

                    $stmt = $pdo->prepare($sql);
                    $stmt->bindValue(':nome', $user);
                    $stmt->bindValue(':email', $email);
                    $stmt->bindValue(':senha', $hash);
                    $stmt->execute();

                    $sucess = 'Usuário cadastrado com sucesso!';
                    header('Location: cadastro.php?sucess=1');
                    exit;
                } else {
                    $errors = 'E-mail já cadastrado.';
                }

            } else {
                $errors[] = 'Confime corretamente a sua senha!';
            }
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
    <form action="" method="POST">
        <input type="text" name="user" placeholder="Nome">
        <input type="email" name="email" placeholder="E-mail">
        <input type="password" name="password" placeholder="Senha">
        <input type="password" name="passwordConfirm" placeholder="Confirme a senha">
        <button type="submit">Cadastrar</button>
    </form>
    <a href="login.php">Login</a>
    <?php if ($errors) : ?>
    <ul>
        <?php foreach($errors as $error) : ?>
        <li><?= $error ?></li>
        <?php endforeach ?>
    </ul>
    <?php endif ?>
    <?php if ($sucess) : ?>
    <p><?= $sucess ?></p>
    <?php endif ?>
</body>

</html>