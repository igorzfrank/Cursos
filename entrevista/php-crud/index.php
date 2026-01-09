<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyTask's - Home</title>

    <link rel="stylesheet" href="assets/style/style.css?v=<?php echo time(); ?>">
    <!-- <link rel="stylesheet" href="assets/style/style.css"> -->
</head>

<body class="home">
    <div class="container">
        <img src="assets/img/logo.svg" alt="Logo MyTask's">
        <h1>ORGANIZE O SEU <span>DIA</span></h1>
        <h2>COM <span>FACILIDADE</span></h2>
        <p>Seu gerenciador de tarefas pessoais, controle sem que ninguém saiba!</p>
        <div class="buttons">
            <a class="btn" href="public/login.php">ACESSAR</a>
            <button class="btn btn-dashed">O PROJETO</button>
        </div>
    </div>
    <div class="modal">
        <button class="closeModal"><img src="assets/img/close.svg" alt=""></button>
        <div class="modal-content">
            <p>Projeto <strong>MyTask's</strong></p>
            <ol>
                <li>Crie a sua <strong>conta</strong>.</li>
                <li>Acesse sua <strong>conta</strong>.</li>
                <li>Crie suas tarefas pessoais.</li>
            </ol>
            <p>Todas as tarefas ficaram salvas dentro da conta criada, apenas está conta terá acesso as tarefas criadas.
            </p>
            <p>Esse é um projeto de desenvolvimento de Software, afim de estudar conceitos de aplicações em
                <strong>PHP</strong>.
            </p>
            <p>Criado e desenvolvido por <strong>Igor Frank Moreno</strong>.</p>
            <p><i>Esse código <strong>NÃO</strong> foi gerado por Inteligencia Artificial!</i></p>
        </div>
        <img class="logo" src="assets/img/logo.svg" alt="Logo MyTask's">
    </div>

    <script type="module" src="assets/js/main.js"></script>
</body>

</html>