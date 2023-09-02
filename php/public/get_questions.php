<?php

// Make a request to the API and get the JSON response
$apiUrl = 'https://opentdb.com/api.php?amount=1&category=18&type=multiple';
$response = file_get_contents($apiUrl);
$data = json_decode($response, true);

// Initialize an empty array to store the transformed data
$transformedData = [];

// Loop through the questions
foreach ($data['results'] as $index => $question) {
    $text = html_entity_decode($question['question']);
    $correct = html_entity_decode($question['correct_answer']);
    $decoyAnswers = array_map('html_entity_decode', $question['incorrect_answers']);

    // Translate the text and answers
    $translationUrl = "https://api.pons.com/text-translation-web/v4/translate?locale=en";
    $headers = ["Content-Type: application/json"];
    $translationData = [
        "impressionId" => "385d55a8-feb9-4cf0-bc65-34374a5096f6",
        "targetLanguage" => "de",
        "text" => $text,
        "sourceLanguage" => "en",
    ];
    
    $translationResponse = file_get_contents($translationUrl, false, stream_context_create([
        "http" => [
            "method" => "POST",
            "header" => implode("\r\n", $headers),
            "content" => json_encode($translationData),
        ],
    ]));
    
    $translatedTextData = json_decode($translationResponse, true);
    $translatedText = $translatedTextData['text'] ?? '';

    $translatedCorrect = $correct; 
    $translatedDecoyAnswers = []; 

    // Translate correct answer
    $translationData['text'] = $correct;
    $translationResponse = file_get_contents($translationUrl, false, stream_context_create([
        "http" => [
            "method" => "POST",
            "header" => implode("\r\n", $headers),
            "content" => json_encode($translationData),
        ],
    ]));
    $translatedCorrectData = json_decode($translationResponse, true);
    $translatedCorrect = $translatedCorrectData['text'] ?? '';

    // Translate decoy answers
    foreach ($decoyAnswers as $decoyIndex => $decoyAnswer) {
        $translationData['text'] = $decoyAnswer;
        $translationResponse = file_get_contents($translationUrl, false, stream_context_create([
            "http" => [
                "method" => "POST",
                "header" => implode("\r\n", $headers),
                "content" => json_encode($translationData),
            ],
        ]));
        $translatedDecoyAnswerData = json_decode($translationResponse, true);
        $translatedDecoyAnswers[$decoyIndex] = $translatedDecoyAnswerData['text'] ?? '';
    }

    $transformedData[] = [
        'text' => $translatedText,
        'correct' => $translatedCorrect,
        'decoyanswer' => $translatedDecoyAnswers,
    ];
}


$jsonData = json_encode($transformedData, JSON_PRETTY_PRINT);
header('Content-Type: application/json');
echo $jsonData;

?>
