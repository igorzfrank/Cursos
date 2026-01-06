<?php 
    $host = 'localhost';
    $dbname = 'php_project_db';
    $user = 'root';
    $password = '';

    try {
        $pdo = new PDO (
            "mysql:host=$host;dbname=$dbname;charset=utf8",
            $user,
            $password
        );
    } catch (PDOException $e) {
        echo "Error de Comunicação: " . $e->getMessage();
    }
?>