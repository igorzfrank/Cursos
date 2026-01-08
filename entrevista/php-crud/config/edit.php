<?php 
    require_once '../config/db.php';
    require_once '../config/auth.php';

    $id = $_GET['id'] ?? null;

    $sql = "SELECT * FROM tarefa WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();

    $tarefa = $stmt->fetch(PDO::FETCH_ASSOC);

    $sql = "UPDATE tarefas SET concluido = NOT concluido WHERE id = :id";

    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $id]);
    
    header('Location: ../public/dashboard.php');
    exit;

    
?>