<?php
    if(!isset($_SESSION['usuario_id'])) {
        header('Location: ../public/login.php');
        exit;
    }
?>