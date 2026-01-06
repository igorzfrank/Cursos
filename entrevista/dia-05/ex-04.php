<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 04</title>
</head>

<body>
    <!--
        Exercício 4 — Verificação
        Verifique se a linguagem "PHP" existe no array de linguagens.
📌      Use in_array().
    -->

    <?php 
        $array = ["Javascript", "Phyton" , "Java", "PHP", "Golang"];
        if(in_array("PHF", $array)) {
            echo "Contem PHP no array.";
        } else {
            echo "Não contem.";
        }
    ?>
</body>

</html>