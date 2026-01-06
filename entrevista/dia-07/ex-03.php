<?php 
    $email = '';
    $senha = '';

    $mensagemErro = [];
    $mensagemSucesso = '';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = $_POST['email'] ?? '';
        $senha = $_POST['senha'] ?? '';

        // Validação
        if (empty($email)) {
            $mensagemErro[] = 'O Campo E-mail é Obrigatório!' ;
        }

        if (empty($senha)) {
            $mensagemErro[] = 'O Campo Senha é Obrigatório!'; 
        }

        if(empty($mensagemErro)) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $mensagemSucesso = 'E-mail validado!';
                if($email === 'igor.moreno@email.com' && $senha = 'tibia123') {
                    $mensagemSucesso = "Login Realizado com Sucesso!";
                } else {
                    $mensagemErro[] = 'E-mail ou senha invalidos!';
                }
            } else {
                $mensagemErro[] = 'E-mail ou senha invalidos!';
            }

        }

    
    }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 03</title>
</head>

<body>
    <!--
    Verifique se os campos:

    - Não estão vazios
    - Email é válido
    📌 Use `filter_var()`.
    -->

    <h2>Login com Validação</h2>

    <form method="POST">
        <input type="email" name="email">
        <input type="password" name="senha">
        <button type="submit">Enviar</button>
    </form>

    <?php if(!empty($mensagemErro)) : ?>
    <ul style="color: red;">
        <?php foreach($mensagemErro as $error) : ?>
        <li><?= $error?></li>
        <?php endforeach?>
    </ul>
    <?php endif?>

    <?php if($mensagemSucesso) : ?>
    <p style="color: green;">
        <?= $mensagemSucesso ?>
    </p>
    <?php endif?>
</body>

</html>