<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 02</title>
</head>

<body>
    <!--
    Exercício 2 — Tabela de multiplicação

    Crie a tabuada do 5 usando for.
    -->

    <?php 
        for ($i = 0; $i <= 10; $i++){
            $result = $i * 5;
            echo "5x$i= $result; <br>";
        };
    ?>
</body>

</html>