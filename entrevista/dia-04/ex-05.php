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

        Exiba apenas números pares de 1 a 20.
    -->

    <?php 
        $contador = 0;

        while ($contador <= 20) {
            if($contador % 2 !== 0) {
                $contador++;
                continue;
            }
            echo "$contador <br>";
            $contador++;
        }
    ?>
</body>

</html>