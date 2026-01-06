<?php 
    $host = 'localhost';
    $dbname = 'login_db';
    $user = 'root';
    $password = '';

    try {
        $pdo = new PDO(
            "mysql:host=$host;dbname=$dbname;charset=utf8",
            $user,
            $password
        );
    } catch (PDOException $e) {
        echo 'Erro de comunicação! ' . $e->getMessage();
    }
?>