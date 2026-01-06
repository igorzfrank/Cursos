<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex 04</title>
</head>

<body>

    <!--
        Crie uma variável $perfil:

        admin
        user
        guest
        Use switch para mostrar permissões diferentes.
    -->
    <?php 
        $perfil = "guest";

        switch ($perfil) {
            case "admin":
                echo "Você tem permissões de Admin!";
                break;
            case "user":
                echo "Você tem permissões de Usuário!";
                break;
            case "guest":
                echo "Você tem permissões de Visitante!";
                break;
            default:
                echo "Algo deu errado!";
        }
    ?>
</body>

</html>