<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex-03</title>
</head>

<body>
    <!-- 
    Exercício 3 — Lista de usuários

    Crie um array com 3 usuários, cada um com:
    nome
    email
    idade
    Exiba apenas os nomes.
    -->
    <?php
        $usuarios = [
            [
                "nome" => "Igor",
                "email" => "igor.frank@email.com",
                "idade" => 31
            ],
            [
                "nome" => "Pedro",
                "email" => "pedro.pedroso@email.com",
                "idade" => 42
            ]
            ];

            foreach ($usuarios as $usuario) {
                echo $usuario["nome"] . "<br>";
            }
    ?>
</body>

</html>