<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!--
    Crie um array com:
    - nome
    - email
    - idade
    Percorra com `foreach`.
    -->

    <?php 
        $usuario = ["nome" => "Igor", "email" => "igor.frank@gmail.com", "idade" => 31];

        foreach ($usuario as $item => $valor) {
            echo "$item: $valor <br>";
        }
    ?>
</body>

</html>