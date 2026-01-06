<?php 
    session_start();

    if(!isset($_SESSION['usuario_id'])) {
        header("Location: login.php");
        exit;
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>

<body>
    <h2>Dashboard</h2>
    <p>Bem-vindo, <?= $_SESSION['usuario_nome'] ?></p>
    <a href="logout.php">Sair</a>
</body>

</html>