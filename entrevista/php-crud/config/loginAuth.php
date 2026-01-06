<?php 
    if(isset($_SESSION['user_id'])) {
        header('Location: ../public/dashboard.php');
        exit;
    }
?>