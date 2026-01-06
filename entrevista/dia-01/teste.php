<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste PHP</title>
    <style>
		body {
			font-size: 1.5em;
		}
		div {
			margin: 0 auto;
			max-width: 500px;
		}
		.exemplo1 {
			color: #333;
		}
	</style>
</head>
<body>
    <?php
        echo "olá mundo!";
        $nome = "Igor";
        $idade = 31;
        $ativo = true;

        echo "<br>";
        echo "Nome: $nome";

        echo "<h1>Teste de Titulo!</h1>";
    ?>

        <ul>
            <?php
                $total = 1;
                $maximo = 10;
                while ($total <= $maximo) :
            
                    echo "<li>Site $total </li>";
            
                $total++;
                endwhile;
            ?>
		</ul>
</body>
</html>