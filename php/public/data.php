<?php
function data(){
    $data = [
        "IT (Hardware)" => [
            'text' => "Woführ steht die Abküruzung CPU? (Tipp CPU bedeutet ins Deutsche übersetzt Prozessor bzw. 'Zentrale Rechen Einheit')",
            'correct' => 'Central Processing Unit',
            'decoyanswer' => [
                'Control Processing Unit',
                'Computer Personal Unit'
            ]
        ],
        "IT (Coding 1)" => [
            'text' => "Welche Programmiersprache wird am häufigsten für die Entwicklung von Webseiten verwendet.(Tipp gesucht ist eine Abkürzung mit 4 Buchstaben)",
            'correct' => 'HTML',
            'decoyanswer' => [
                'C++',
				
				
            ]
        ],
        "IT (Coding 2)" => [
            'text' => "Woführ steht die Abküruzung HTML? (Tipp Die Ersten 2 Buchstaben der Abkürzung bilden gemeinsam ein Wort.)",
            'correct' => 'Hypertext Markup Language',
            'decoyanswer' => [
                'Hyperlink and Text Markup Language',
                'Home Tool Markup Language',
                'High Tech Markup Language'
            ]
        ],
        "IT (Coding 3)" => [
            'text' => "Wofür wird CSS in der webentwicklung verwendet? (Tipp CSS ist extrem wichtig schöne Webseiten zu Gestalten und ist meißtens eher unwichtig für die Korrekte Funktionsweise.)",
            'correct' => 'Styling,Design und Formatierung.',
            'decoyanswer' => [
                'Verarbeitung Serverseitiger anfragen',
                'Verwaltung von Datenbanken',
                'für Interaktivität',
				'KI'
            ]
        ],
        "IT (Netzwerke 1)" => [
            'text' => "Welches Protokoll wird für <strong>unverschlüsselten</strong> datentransfer verwendet?(Tipp es handelt sich um eine Abkürzung mit 3 Buchstaben)",
            'correct' => 'FTP (File Transfer Protocol)',
            'decoyanswer' => [
                'SMTP (Simple Mail Transfer Protocol)',
                'SSH (Secure Shell)',
				'Gmail',
				'Hotmail',
				'Tormail'
            ]
        ],
        "IT (Netzwerke 2)" => [
            'text' => "Woführ steht die Abküruzung DNS?(Tipp DNS ist ein Protokoll welches IP Adressen <strong>Systemisch</strong> in <strong>Domainnamen</strong> übersetzt und wird gebildet aus drei Worten.)",
            'correct' => 'Domain Name System',
            'decoyanswer' => [
                'Dynamic Network System',
                'Digital Network Service',
                'Data Naming Scheme'
            ]
        ],
        "IT (Datenbanken)" => [
            'text' => "Welche Programmiersprache wird für die Verwaltung von Datenbanken verwendet?(Tipp gesucht wird eine Abkürzung mit 3 Buchstaben)",
            'correct' => 'SQL ',
            'decoyanswer' => [
                'JavaScript',
                'Python',
                'Ruby',
				'DSGVO',
				'In Minecraft Legacy'
            ]
        ],
        "IT (Coding 4)" => [
            'text' => "Welche Dateiendung wird für JavaScript (JS) verwendet?(Tipp Dateiendungen sind Beispielsweise .exe für Programme oder .jpg für Bilder)",
            'correct' => '.js',
            'decoyanswer' => [
                '.html',
                '.css',
                '.php'
            ]
        ],
        
		"KI (Coding 05)" => [
            'text' => "ein Typischer Desktop PC besteht aus den folgenden Komponenten?",
            'correct' => 'Festplatte, Mainbord, Prozessor, Arbeitsspeicher & Grafikkarte,Netzteil',
            'decoyanswer' => [
                'Java',
            ]
        ],
    ];
    return $data;
}
return data();
