<?php 
    require_once '../config/db.php';

    // Header informa que serão devolvidos DADOS não HTML
    header('Content-Type: application/json');

    if($_SERVER['REQUEST_METHOD'] !== 'POST') {
        echo json_encode(['erro' => 'Método não permitido']);
        exit;
    }

    $email = $_POST['email'] ?? '';
    $senha = $_POST['senha'] ?? '';

    $sql = "SELECT * FROM usuarios WHERE email = :email";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':email', $email);
    $stmt->execute();

    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    // Aqui através do json_encode é escolhido qual retorno teremos
    if ($usuario && password_verify($senha, $usuario['senha'])) {
        echo json_encode([
            'sucesso' => true,
            'usuario' => [
                'id' => $usuario['id'],
                'nome' => $usuario['nome']
            ]
        ]);
    } else {
        echo json_encode([
            'sucesso' => false,
            'mensagem' => 'Login inválido'
        ]);
    }
?>