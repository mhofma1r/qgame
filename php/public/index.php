<?php
$topic = 'true';
if (!isset($_GET['topic'])) {
    $topic = 'false';
} ?>
<!DOCTYPE HTML>
<html lang="de">

<head>
    <link rel="stylesheet" href="css/style.css?var=<?php echo rand(0, 99999); ?>">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/img/favicon.ico" rel="icon" type="image/x-icon"/>

    <script src="lib/jquery-3.7.0.min.js?var=<?php echo rand(0, 99999); ?>"></script>
    <script src="lib/jqui/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="lib/jqui/jquery-ui.css">
</head>

<body topicSelected="<?php echo $topic ?>">
<script src="js/app.js?var=<?php echo rand(0, 99999); ?>">
</script>
<div class="container">
    <div class="page">
        <img src="img/logo.jpg" width="10%" alt="smartuplogo" style="float: left;position: relative;top: 52px;left: 15%;"><h1 class="padding-top">Themenbereiche</h1>

            <section class="topics">

                <a href="/?topic=2#fragen">
                    <img src="/img/beruf1_labeled.jpg" topic="Beruf" alt="I can haz placeholder?"/>
                </a>
                <a href="/?topic=5#fragen">
                    <img src="/img/netzwerk1_labeled.png" topic="Netzwerk" alt="I can haz placeholder?"/>
                </a>
                <a href="/?topic=4#fragen">
                    <img src="/img/coding1_labeled.jpg" topic="Coding" alt="I can haz placeholder?"/>
                </a>
                <a href="/?topic=1#fragen">
                    <img src="/img/hardware1_labeled.jpg" topic="Hardware" alt="I can haz placeholder?"/>
                </a>
                <a href="/?topic=3#fragen">
                    <img src="/img/lehre1_labeled.jpg" topic="Lehre" alt="I can haz placeholder?"/>
                </a>

            </section>

        </section>
        <div class="billbord">

        </div>
        <div class="content">
            <section class="game">

                <h1>Fragen</h1>

                <section class="questions">
                </section>
                <section class="questionText"></section>
                <hr>
                <div class="answer-correct modal" title="Basic dialog">
                    <p>Sehr gut! Die Antwort ist Richtig</p>
                    <a href="/" class="button resultmsgBtn">Weiter</a>
                </div>
                <div class="answer-wrong modal" title="Basic dialog">
                    <p>Sorry deine Antwort war nicht leider nicht richtig.Du kannst das Fenster Schließen!</p>
                </div>

                <section class="questionSection">

                    <h1>Frage 1</h1>
                    <p>Fragetext</p>
                </section>
                <section class="answers">
                    <a name="fragen">
                    <h1>Antworten:</h1>
                    <section class="answerCardGrid">
                    </section>
                    </a>
                </section>
            </section>
        </div>
    </div>
</div>
</div>
</body>

</html>