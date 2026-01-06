<?php 
    $host = 'localhost';
    $dbname = 'treino_bd';
    $user = 'root';
    $password = '';

    try {
        $pdo = new PDO (
            "mysql:host=$host;dbname=$dbname;charset=utf8",
            $user,
            $password
        );
    } catch (PDOException $e) {
        echo "Erro de conexão: " . $e->getMessage();
    }

    $id = $_GET['id'] ?? null;

    if($id) {
        $sql = "DELETE FROM pessoas WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
    }

    header('Location: index.php');
    exit;

?>