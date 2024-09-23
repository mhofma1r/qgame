<?php

require_once('db.php');
$qpool=[];
foreach ($data as $row){
    $qpool[$row['question_title']]=[
        'text' => $row['question_text'],
        'correct' => $row['correct_answer'],
        'decoyanswer' => $row['decoys']];

}
return $qpool;