<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 02</title>
</head>

<body>
    <!--
        Use if para validar:

        Email correto
        Senha correta
    -->

    <?php 
        $email = "admisn@gmail.com";
        $senha = "12345";

        if ($email === "admin@gmail.com" && $senha === "123456") {
            echo "Login realizado com Sucesso.";
        } else if ($email === "admin@gmail.com" && $senha !== "123456") {
            echo "Senha incorreta!";
        } else if ($email !== "admin@gmail.com" && $senha === "123456") {
            echo "Email ou senha incorretos!";
        } else {
            echo "Email e senha incorretos!";
        }
    ?>
</body>

</html>