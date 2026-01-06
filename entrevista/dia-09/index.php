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
        echo "Conectado";

    } catch (PDOException $e) {
        echo "Erro de conexão: " . $e->getMessage();
    }

    $sql = "SELECT * FROM pessoas";
    $stmt = $pdo->query($sql);

    $pessoas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!empty($pessoas)) {
        foreach ($pessoas as $pessoa) {
            if($pessoa['idade'] >= 18 ) {
                echo "<p> Nome: " . $pessoa['nome'] . "- Idade: " . $pessoa['idade'] . " - Adulto!</p>";
            } else {
                echo "<p> Nome: " . $pessoa['nome'] . "- Idade: " . $pessoa['idade'] . " - Menor de Idade!</p>";
            }
        }
    } else {
        echo '<p>Não a pessoas no banco!</p>';
    }
?>