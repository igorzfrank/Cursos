<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 04</title>
</head>

<body>
    <!--
    Exercício 4 — Maior de idade

    Crie uma função que receba uma idade e retorne:
    true (maior de idade)
    false (menor de idade)
    -->

    <?php 
        function idade($idade) {
            if ($idade >= 18) {
                return true;
            } else {
                return false;
            }
        }

        echo idade(18);
    ?>
</body>

</html>