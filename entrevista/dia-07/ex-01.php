<?php 
    $nome = "";
    
    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        $nome = $_GET['nome'] ?? '';
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 01</title>
</head>

<body>
    <!-- 
    Exercício 1 — Formulário GET

    Crie um formulário que receba:
    Nome
    Cidade
    Exiba os dados na página.
    -->

    <form action="ex-01.php" method="GET">
        <input type="text" name="nome">
        <button type="submit">Enviar</button>
    </form>

    <?php 
    
    if ($nome) {
        echo "Nome: $nome";
    }
    
    ?>

</body>

</html>