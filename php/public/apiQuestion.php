<!DOCTYPE HTML>
<html lang="de">

<head>
    <link rel="stylesheet" href="css/style.css?var=<?php echo rand(0, 99999); ?>">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/img/favicon.ico" rel="icon" type="image/x-icon"/>

    <script src="lib/jquery-3.7.0.min.js?var=<?php echo rand(0, 99999); ?>"></script>
    <script src="lib/jqui/jquery-ui.min.js"></script>
    <script src="js/app.js?var=91"></script>
    <link rel="stylesheet" href="lib/jqui/jquery-ui.css">
</head>

<body>
<script type="text/javascript">
    $(document).ready(function () {
        qGameApp("/api/fetch")


    })
</script>
<div class="container">
    <div class="page">
        <div class="billbord">
            <img src="img/logo.jpg" width="10%" alt="smartuplogo">
        </div>
        <div class="content">
            <section class="game">
                <h1>Fragen</h1>
                <button id="additionalQuestionsBtn" class="button">Weitere Fragen</button>
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
                    <h1>Antworten:</h1>
                    <section class="answerCardGrid">
                    </section>
                </section>
            </section>
        </div>
    </div>
</div>

</body>

</html>