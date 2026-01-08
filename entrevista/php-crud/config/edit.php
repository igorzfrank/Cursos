<?php 
    if(!isset($_SESSION['user_id'])) {
        require_once '../config/db.php';
        // require_once '../config/auth.php';
    
        $id = $_GET['id'] ?? null;
    
        $sql = "UPDATE tarefas SET concluido = NOT concluido WHERE id = :id";
    
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        
        header('Location: ../public/dashboard.php');
        exit;
    } else {
        header('Location: ../public/login.php');
        exit;
    }
?>