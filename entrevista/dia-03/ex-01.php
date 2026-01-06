<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 01</title>
</head>

<body>
    <!--
    Exercício 1 — Maioridade

    Crie uma variável $idade e mostre:

    Criança (<12)
    Adolescente (12–17)
    Adulto (18–59)
    Idoso (60+)
    -->

    <?php 
        $idade = 11;

        if ($idade < 12) {
            echo "É uma criança.";
        } else if ($idade >= 12 && $idade < 17) {
            echo "É um adolescente.";
        } else if ($idade >= 17 && $idade < 59) {
            echo "É um adulto.";
        } else {
            echo "É um idoso.";
        }
    ?>
</body>

</html>