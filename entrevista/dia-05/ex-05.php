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
        Calcule a média de notas:
    -->

    <?php 
        $notas = [7, 8, 6, 9, 5];

        $soma = 0;
        foreach($notas as $nota) {
            echo "$nota <br>";
            $soma = $soma + $nota;
        }

        $result = $soma / count($notas);
        echo "A média é $result! <br>";
    ?>
</body>

</html>