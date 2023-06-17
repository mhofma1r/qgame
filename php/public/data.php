<?php
function data(){
    $data = [
        "IT (Hardware)" => [
            'text' => "What does CPU stand for?",
            'correct' => 'Central Processing Unit',
            'decoyanswer' => [
                'Control Processing Unit',
                'Computer Personal Unit',
                'Central Process Unit'
            ]
        ],
        "IT (Coding 1)" => [
            'text' => "Which programming language mostly used for web development?",
            'correct' => 'HTML',
            'decoyanswer' => [
                'Java',
                'C++'
            ]
        ],
        "IT (Coding 2)" => [
            'text' => "What does HTML stand for?",
            'correct' => 'Hypertext Markup Language',
            'decoyanswer' => [
                'Hyperlink and Text Markup Language',
                'Home Tool Markup Language',
                'High Tech Markup Language'
            ]
        ],
        "IT (Coding 3)" => [
            'text' => "What is the purpose of CSS in web development?",
            'correct' => 'Styling and formatting web pages',
            'decoyanswer' => [
                'Handling server-side logic',
                'Managing databases',
                'Implementing interactivity'
            ]
        ],
        "IT (Netzwerke 1)" => [
            'text' => "Which protocol is used to transfer files from a local machine to a remote server?",
            'correct' => 'FTP (File Transfer Protocol)',
            'decoyanswer' => [
                'HTTP (Hypertext Transfer Protocol)',
                'SMTP (Simple Mail Transfer Protocol)',
                'SSH (Secure Shell)'
            ]
        ],
        "IT (Netzwerke 2)" => [
            'text' => "What does DNS stand for in networking?",
            'correct' => 'Domain Name System',
            'decoyanswer' => [
                'Dynamic Network System',
                'Digital Network Service',
                'Data Naming Scheme'
            ]
        ],
        "IT (Datenbanken)" => [
            'text' => "Which database language is commonly used for querying and managing data?",
            'correct' => 'SQL (Structured Query Language)',
            'decoyanswer' => [
                'JavaScript',
                'Python',
                'Ruby'
            ]
        ],
        "IT (Netzwerke 3)" => [
            'text' => "What is the purpose of a firewall in computer security?",
            'correct' => 'To monitor and control network traffic',
            'decoyanswer' => [
                'To encrypt data',
                'To store passwords',
                'To detect malware'
            ]
        ],
        "IT (Coding 4)" => [
            'text' => "What is the file extension for a JavaScript file?",
            'correct' => '.js',
            'decoyanswer' => [
                '.html',
                '.css',
                '.php'
            ]
        ],
        "IT (Coding 5)" => [
            'text' => "Which programming language is primarily used for iOS app development?",
            'correct' => 'Swift',
            'decoyanswer' => [
                'Java',
                'C#',
                'Objective-C'
            ]
        ],
    ];
    return $data;
}
return data();
