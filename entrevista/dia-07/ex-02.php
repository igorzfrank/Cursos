   <?php 

        $email = '';
        $senha = '';

        $mensagemErro = [];
        $mensagemSucesso ='';

        if ($_SERVER['REQUEST_METHOD'] === "POST") {
            $email = $_POST['email'] ?? '';
            $senha = $_POST['password'] ?? ''; 

            // Validação de campos
            if (empty($email)) {
                $mensagemErro[] = 'O Campo e-mail é obrigatório.';
            }

            if (empty($senha)) {
                $mensagemErro[]= "O Campo senha é obrigatório."; 
            }

            // Se não houver erros de validação, verifica o login

            if(empty($mensagemErro)) {
                if ($email === 'igor.moreno@email.com' && $senha === 'tibia123'){
                    $mensagemSucesso = "Login realizado com sucesso!";
                } else {
                    $mensagemErro[] = "Email ou senha inválidos.";
                }
            }
        }
    ?>

   <!DOCTYPE html>
   <html lang="en">

   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Ex 02</title>
   </head>

   <body>
       <!-- 
    Exercício 2 — Formulário POST

    Crie um formulário de:
    Email
    Senha
    Exiba mensagem:
    Login realizado
    Campos inválidos

    -->

       <h2>Login</h2>


       <form method="POST">
           <input type="email" name="email" value="<?= htmlspecialchars($email) ?>">
           <input type="password" id="password" name="password">
           <button type="submit">Enviar</button>
       </form>

       <?php if(!empty($mensagemErro)) : ?>
       <ul style="color: red;">
           <?php foreach($mensagemErro as $erro) : ?>
           <li><?= $erro ?></li>
           <?php endforeach; ?>
       </ul>
       <?php endif; ?>

       <?php if ($mensagemSucesso): ?>
       <p style="color: green;">
           <?= $mensagemSucesso ?>
       </p>
       <?php endif; ?>
   </body>

   </html>