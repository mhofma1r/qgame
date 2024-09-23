<?php
$url=$_SERVER['HTTP_HOST'];
if ($url=='localhost'){
    $servername = "mariadb";
    $username = "root";
    $password = "mewj8mtn";
}else{
    $servername = "localhost";
    $username = "root";
    $password = "itw";
}


try {
    $conn = new PDO("mysql:host=$servername;dbname=qgame", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
}$sql = <<<EOD
SELECT 
    q.id AS question_id,
    q.titel AS question_title,
    q.text AS question_text,
    q.correct AS correct_answer,
    t.topic AS topic_name,
    GROUP_CONCAT(d.text ORDER BY d.id SEPARATOR ';_;') AS decoy_texts
FROM 
    questions q
LEFT JOIN 
    topics t ON q.question_topics_id = t.id
LEFT JOIN 
    decoys d ON q.id = d.questions_id
WHERE
    q.question_topics_id = :topic_id
GROUP BY 
    q.id, q.titel, q.text, q.correct, t.topic;
EOD;
if (isset($_GET['topic'])){
    $topic_id=$_GET['topic'];
}
$stmt = $conn->prepare($sql);
$stmt->bindParam(':topic_id', $topic_id, PDO::PARAM_INT);
$stmt->execute();
$data=[];
while ($row= $stmt->fetch(PDO::FETCH_ASSOC)) {
    if (empty($row['decoy_texts'])){
        unset($row['decoy_texts']);
        $row['decoys']=[];
        unset($row['decoy_texts']);
        array_push($data,$row);
        continue;
    }
    if (str_contains($row['decoy_texts'],';_;')){
        $row['decoys']=explode(';_;',$row['decoy_texts']);

    }else{
        $row['decoys']=$row['decoy_texts'];

    }

    unset($row['decoy_texts']);
    array_push($data,$row);
}

?>