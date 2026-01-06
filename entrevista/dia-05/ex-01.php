<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 01</title>
</head>

<body>
    <!-- 
    Exercício 1 — Lista simples

    Crie um array com 5 linguagens de programação e exiba.
    -->
    <?php 
    $array = ["Javascript", "Phyton" , "Java", "PHP", "Golang"];
    foreach ($array as $item) {
        echo "$item <br>";
    }
    ?>

</body>

</html>