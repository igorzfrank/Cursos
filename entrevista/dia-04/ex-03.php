<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!--
    Crie um array com 5 nomes e exiba usando foreach.
    -->

    <?php 
        $nomes = ["Igor", "Ana", "Lucas", "Marcos", "Olavo"];

        foreach($nomes as $nome) {
            echo "$nome <br>";
        }
    ?>
</body>

</html>