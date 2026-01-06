<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 02</title>
</head>

<body>
    <!-- -->
    <?php 
        $usuario = ["nome" => "Igor", "email" => "igor.frank@email.com", "idade" => 31];

        foreach($usuario as $item => $valor) {
            echo "$item : $valor <br>";
        }
    ?>
</body>

</html>