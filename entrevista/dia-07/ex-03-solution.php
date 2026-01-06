<?php 
    $email = '';
    $mensagemErro = [];
    $mensagemSucesso = '';

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = trim($_POST['email'] ?? '');

        // Validação: campo vazio

        if(empty($email)) {
            $mensagemErro[] = 'O campo email é obrigatório.';
        }

        // Validação: formato do email

        if(!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $mensagemErro[] = 'O email informado não é valido.';
        }

        // Se não houver erros

        if(empty($mensagemErro)) {
            $mensagemSucesso = 'Email válido!';
        }
    }

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 03 - Solução</title>
</head>

<body>

    <h2>Validação de Email</h2>

    <form action="" method="POST">
        <input type="text" name="email" value="<?= htmlspecialchars($email) ?>">
        <button type="submit">Validar</button>
    </form>

    <?php if(!empty($mensagemErro)) : ?>
    <ul style="color: red;">
        <?php foreach($mensagemErro as $error) : ?>
        <li><?= $error ?></li>
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