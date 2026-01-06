<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 03</title>
</head>

<body>
    <!-- 
    Exercício 3 — Média

    Crie uma função que receba um array de notas e retorne a média. 
    -->

    <?php 
        function media($array) {
            $soma = 0;
            foreach($array as $valor) {
                $soma = $soma + $valor;
            }

            return $soma / count($array);
        }

        echo media([15,6,27]);
    ?>
</body>

</html>