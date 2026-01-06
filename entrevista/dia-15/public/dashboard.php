<?php
    session_start();
    require_once '../config/auth.php';
?>

<h2>Dashboard</h2>

<p>Bem-vindo, <?= $_SESSION['usuario_nome'] ?></p>

<a href="logout.php">Sair</a>