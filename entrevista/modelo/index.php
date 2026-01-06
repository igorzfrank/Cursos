<?php 
    $login = $_POST["login"] ?? '';
    $senha = $_POST["senha"] ?? '';
?>

<p><?= 'Usuario: ' . $login . ' - Senha: '. $senha ?></p>