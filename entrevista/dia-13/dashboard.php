<?php 
    session_start();

    if(!isset($_SESSION['logado'])) {
        header('Location: login.php');
        exit;
    }
?>

<h2>Dashboard</h2>
<p>Bem-vindo, <?= $_SESSION['email'] ?></p>
<a href="logout.php">Sair</a>