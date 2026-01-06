<?php 
    $nome = '';
    $email = '';
    $idade = '';

    $mensagemErro = [];
    $mensagemUsuario = '';

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nome = $_POST['nome'] ?? '';
        $email = trim($_POST['email'] ?? '');
        $idade = $_POST['idade'] ?? '';

        if(empty($nome)) {
            $mensagemErro[] = "O campo de nome é obrigatorio!";
        }

        if(empty($email)) {
            $mensagemErro[] = "O campo email é obrigatorio!";
        }

        if(empty($idade)) {
            $mensagemErro[] = "O Campo idade é obrigatorio!";
        }

        if(empty($mensagemErro)) {
            if($idade < 18) {
                $mensagemUsuario = 'Você é um Usuario com acesso Limitado.';
            } else if ($idade >= 18 && $idade < 61) {
                $mensagemUsuario = 'Você é um Usuario com acesso Normal!';
            } else {
                $mensagemUsuario = 'Você é um Usuario com acesso Acessibilizado.';
            }
        }
    }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 04</title>
</head>

<body>

    <form action="" method="POST">
        <label for="name">Nome</label>
        <input type="text" name="nome">
        <label for="email">Email</label>
        <input type="email" name="email">
        <label for="idade">Idade</label>
        <input type="number" name="idade">
        <button type="submit">Enviar</button>
    </form>

    <?php if(!empty($mensagemErro)) : ?>
    <ul style="color: red;">
        <?php foreach($mensagemErro as $error) : ?>
        <li><?= $error?></li>
        <?php endforeach?>
    </ul>
    <?php endif?>

    <?php if($mensagemUsuario) :?>
    <p styel="color: green;">
        <?= $mensagemUsuario?>
    </p>
    <?php endif ?>

</body>

</html>