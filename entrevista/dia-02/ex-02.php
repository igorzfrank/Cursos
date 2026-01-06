<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 02</title>
</head>
<body>
    <!--
        Exercício 2 — Cálculo Simples

        Crie duas variáveis numéricas e exiba:
        Soma
        Subtração
        Multiplicação
        Divisão
    -->
    <?php
        $num1 = 10;
        $num2 = 20;

        $soma = $num1 + $num2;
        $sub = $num1 - $num2;
        $mult = $num1 * $num2;
        $div = $num1 / $num2;

        echo "<h1> Soma $soma - Subtração $sub - Multiplicação $mult - Divisão $div. </h1>"
    ?>
</body>
</html>