<?php 
    require_once '../config/auth.php';

    $mensagem = '';

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if(isset($_FILES['arquivo']) && $_FILES['arquivo']['error'] === 0) {
            $arquivo = $_FILES['arquivo'];
            $nome = $arquivo['name'];
            $tamanho = $arquivo['size'];
            $tmp = $arquivo['tmp_name'];

            $extensao = strtolower(pathinfo($nome, PATHINFO_EXTENSION));

            $extensoesPermitidas = ['jpg', 'png', 'pdf'];
            $tamanhoMaximo = 2 * 1024 * 1024; // 2MB

            if(!in_array($extensao, $extensoesPermitidas)) {
                $mensagem = 'Tipo de arquivo não permitido';
            } else if ($tamanho > $tamanhoMaximo) {
                $mensagem = 'Arquivo muito grande';
            } else {
                $novoNome = uniqid() . '.' . $extensao;
                move_uploaded_file($tmp, "../uploads/$novoNome");
                $mensagem = 'Upload realizado com sucesso - File: ' . $_FILES['arquivo']['name'];
            }

        } else {
            $mensagem = 'Erro ao enviar arquivo';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload</title>
</head>

<body>
    <h2>Upload de Arquivo</h2>

    <form action="" method="POST" enctype="multipart/form-data">
        <input type="file" name="arquivo">
        <br><br>
        <button type="submit">Enviar</button>
    </form>

    <?php if($mensagem) : ?>
    <p><?= $mensagem ?></p>
    <?php endif ?>
</body>

</html>