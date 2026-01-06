<?php 

    $host = 'localhost';
    $dbname = 'treino_bd';
    $user = 'root';
    $password = '';

    try {
        $pdo = new PDO (
            // Nesse caso não foi utilizado variaveis
            "mysql:host=$host;dbname=$dbname;charset=utf8", 
            $user, 
            $password
        );
    } catch (PDOException $e) {
        echo "Erro de coneção: " . $e->getMessage();
    }

    $sql = "SELECT * FROM pessoas";
    $pessoas = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div>
        <h2>Lista de Pessoas</h2>
        <ul>
            <?php foreach($pessoas as $pessoa) : ?>
            <li>
                <?= 'Nome: ' . $pessoa['nome'] . ' - E-mail: ' . $pessoa['email'] . ' - Idade: ' . $pessoa['idade'] . ' anos.'?>
                <a href="editar.php?id=<?= $pessoa['id']?>">Editar</a>
                <button class="openModal" data-id="<?= $pessoa['id'] ?>">Excluir</button>
            </li>
            <?php endforeach ?>
        </ul>
    </div>
    <div class="modal" id="modal">
        <p>Deseja excluir?</p>
        <a id="confirmDelete" href="#">Excluir</a>
        <button class="closeModal">Fechar</button>
    </div>
</body>
<script src="script.js"></script>

</html>