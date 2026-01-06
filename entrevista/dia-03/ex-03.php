<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 03</title>
</head>

<body>
    <!--
    Crie uma nota e exiba:

        A
        B
        C
        D
        F
    -->
    <?php 
        $nota = "A";

        if ($nota == "A" || $nota == "a") {
            echo "Nota A";
        } else if ($nota == "B" || $nota == "b") {
            echo "Nota B";
        } else if ($nota == "C" || $nota == "c") {
            echo "Nota C";
        } else if ($nota == "D" || $nota == "d") {
            echo "Nota D";
        } else {
            echo "Nota F";
        }
    ?>
</body>

</html>