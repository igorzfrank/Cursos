<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 03</title>
</head>
<body>
<!-- 
Mostre:

Se é maior de idade
Se pode tirar CNH
Se pode se aposentar
-->
    <?php 
        $idade = 31;
        if ($idade > 18) {
            echo "Maior de idade.";
        } else {
            echo "Menor de idade.";
        }

        if ($idade > 61) {
            echo " E já pode se aposentar!";
        } else {
            echo " E não pode se aposentar!";
        }
    ?>
</body>
</html>