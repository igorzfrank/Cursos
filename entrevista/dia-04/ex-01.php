<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 01</title>
</head>

<body>
    <!--
    Exercício 1 — Números

    Exiba números de 1 a 10 usando:
    for
    while
    -->

    <?php 
        echo "Numeros em for: <br>";

        for ($i = 1; $i <= 10; $i++) {
            echo "$i <br>";
        };

        echo "Numeros em while: <br>";

        $contador = 1;
        
        while ($contador <= 10) {
            echo "$contador <br>";
            $contador++;
        };

        
    ?>
</body>

</html>