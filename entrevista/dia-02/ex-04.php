<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 04</title>
</head>

<body>
    <!-- 
Mostre:

Aprovado (>=7)
Recuperação (>=5 e <7)
Reprovado (<5)
-->

    <?php 
    $nota = 3.5;

    if ($nota < 5) {
        echo "Nota: $nota - Reprovado!";
    } else if ($nota >= 5 && $nota < 7) {
        echo "Nota: $nota - Recuperação!";
    } else {
        echo "Nota: $nota - Aprovado!";
    }
?>
</body>

</html>