<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 05</title>
</head>

<body>
    <!--
    Exercício 5 — Desafio

    Crie uma função que receba um salário e retorne:

    “Baixo”
    “Médio”
    “Alto”
    📌 Use condicionais dentro da função.
    -->

    <?php 
        function salario($salario) {
            if ($salario <= 1510) {
                return "Baixo";
            } else if ($salario > 1510 && $salario < 10000) {
                return "Medio";
            } else {
                return "Alto";
            }
        }
        
        echo salario(2500);
    ?>
</body>

</html>