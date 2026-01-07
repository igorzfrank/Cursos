<?php 
    require_once 'db.php';

    $id = $_GET['id'] ?? null;

    if($id) {
        $sql = "DELETE FROM tarefas WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
    }

    header('Location: ../public/dashboard.php');
    exit;
?>