<?php
function data(){
    $data = [
        "IT (Hardware 1)" => [
            'text' => "Wofür steht die Abkürzung CPU? (Tipp CPU bedeutet ins Deutsche übersetzt Prozessor bzw. 'Zentrale Recheneinheit')",
            'correct' => 'Central Processing Unit',
            'decoyanswer' => [
                'Control Processing Unit',
                'Computer Personal Unit'
            ]
        ],
    ];
    return $data;
}
echo json_encode(data());
