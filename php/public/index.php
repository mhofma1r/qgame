<?php
$url = ltrim($_SERVER['REQUEST_URI'], '/');

if ($url === 'api') {
    $page = file_get_contents('./apiQuestion.php', true);
}
if ($url==='api/fetch'){
    require_once ("get_questions.php");
    return;
}
if(!isset($page)){
    $page=file_get_contents('././qgame.php', true);
}


echo $page;
?>

