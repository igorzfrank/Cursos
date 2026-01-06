<?php 
    $host = 'sql109.infinityfree.com';
    $dbname = 'if0_40819251_to_do_db';
    $user = 'if0_40819251';
    $password = 'pbz3aIhQCV';

    try {
        $pdo = new PDO (
            "mysql:host=$host;dbname=$dbname;charset=utf8",
            $user,
            $password
        );
    } catch (PDOException $e) {
        echo "Error de conexão: " . $e->getMessage();
    }


    $id = $_GET['id'] ?? null;

    if($id) {
        $sql = "DELETE FROM tarefa WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':id' , $id);
        $stmt->execute();
    }

    header('Location: index.php');
    exit;
    
?>