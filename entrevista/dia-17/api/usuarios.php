<?php 
    require_once '../config/db.php';

    header('Content-Type: application/json');

    $sql = "SELECT id, nome, email FROM usuarios";
    $stmt = $pdo->query($sql);
    
    $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($usuarios);

?>