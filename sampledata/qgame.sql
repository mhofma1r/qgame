-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Generation Time: Sep 23, 2024 at 01:05 PM
-- Server version: 11.1.2-MariaDB-1:11.1.2+maria~ubu2204
-- PHP Version: 8.2.8

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qgame`
--

-- --------------------------------------------------------

--
-- Table structure for table `decoys`
--

CREATE TABLE `decoys` (
  `id` int(11) UNSIGNED NOT NULL,
  `text` varchar(40) NOT NULL,
  `questions_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Truncate table before insert `decoys`
--

TRUNCATE TABLE `decoys`;
--
-- Dumping data for table `decoys`
--

INSERT INTO `decoys` (`id`, `text`, `questions_id`) VALUES
(3, ' Ein spezieller Computermonitor', 8),
(4, 'Ein Gerät, das Musik abspielt', 8),
(5, 'Ein USB-Stick', 8),
(6, 'Ein spezieller Computermonitor', 5),
(7, 'Als Gerät, das Musik abspielt', 5),
(8, 'Als Drucker', 5),
(9, 'Der Monitor', 9),
(10, 'Die Festplatte', 9),
(11, 'Der Prozessor', 9),
(12, 'Meister der Bauklötze', 4),
(13, ' Ideenarchitekt', 4),
(14, 'Der, der mit dem Zollstock tanzt', 4),
(15, 'Metall zum Schmelzen bringen', 6),
(16, 'Metall zu bemalen', 6),
(17, 'Metall in den Weltraum zu schicken', 6),
(24, 'Deinen Hund füttern', 11),
(25, 'Drucken', 11),
(26, 'Deine Schuhe binden', 11),
(27, '„Wird viel gesägt!“', 7),
(28, ' „Ich mache die besten Späne!“', 7),
(29, '„Ich drehe durch!“', 7),
(31, 'Ein Kabel', 12),
(32, 'Ein spezielles Handy.', 12),
(33, 'Ein Fernseher mit Internetzugang', 12),
(34, '. (Punkt)', 10),
(35, ': (Doppelpunkt)', 10),
(36, ', (Komma)', 10),
(37, 'Script', 13),
(38, 'Dokument', 13),
(39, 'Tabelle', 13),
(40, 'Python', 14),
(41, 'Java', 14),
(42, 'C++', 14),
(43, 'Die Lehredauert nur 1 Jahr.', 19),
(44, 'Die lehre dauert 7 Jahre.', 19),
(45, 'Die Lehredauert 2 Monate', 19),
(46, 'Maus', 15),
(47, 'Monitor', 15),
(48, 'Tastatur', 15),
(49, 'Lehrabschlussprüfling', 20),
(50, 'Lebenabschnittspartner', 20),
(51, 'Logischeausmusterungsprüfung', 20),
(52, 'Macht deine Hausaufgaben', 21),
(53, 'Zeigt lustige Katzenvideos', 21),
(54, 'Speichert deine Süßigkeiten', 21),
(55, 'Kühlschrank', 22),
(56, 'Mikrowelle', 22),
(57, 'Drucker', 22),
(58, '69 Jahre', 23),
(59, '420 Stunden', 23),
(60, '2,5 Jahre', 23),
(61, 'Videospiele spielen', 24),
(62, 'Bilder malen', 24),
(63, 'Pflanzen gießen', 24),
(64, 'Schwarzgeld', 25),
(65, 'einen Handschlag', 25),
(66, 'Playstation Guthaben Karte', 25),
(70, 'Wartung von Kraftfahrzeugen', 29),
(71, 'Pflege von Patienten', 29),
(72, 'Zubereitung von Speisen', 29),
(76, 'Ausbildung zum/r Elektriker/in', 28),
(77, 'Meisterbrief im Handwerk ', 28),
(78, 'Abschluss in Betriebswirtschaftslehre', 28),
(79, 'im Kreisverkehr fahren', 27),
(80, 'Autos kaufen', 27),
(81, 'Computer reparieren', 27),
(82, 'Meister Yoda', 26),
(83, 'Der Hausmeister', 26),
(84, 'Barack Obama', 26),
(85, '50-100 ms', 30),
(86, '100-150 ms', 30),
(87, '150-200 ms', 30),
(89, 'Flugzeughangars', 31),
(90, 'auf dem Feld', 31),
(91, 'In Großen Fabriken', 31),
(92, 'HTML', 39),
(93, 'SQL', 39),
(94, 'LaTeX', 39),
(99, 'SSDs sind langsamer', 41),
(100, 'HDDs sind schneller', 41),
(101, 'Beide gleich schnell', 41),
(102, 'alt+f4 und Enter', 38),
(103, 'Tischler', 44),
(104, 'Bäcker', 44),
(105, 'Elektriker', 44),
(106, 'In %temp% alle Dateien löschen', 38),
(107, 'In CMD \"ping [IP]\" eingeben', 38),
(123, 'Eine einzigartige Telefonnummer', 47),
(124, 'Eine Art von Kabel', 47),
(125, 'Ein spezielles Programm, für Netzwerke', 47),
(126, 'Dass die Sticks RGB-Lichter haben', 48),
(127, 'Kühlung mit Premium-Luft ', 48),
(128, 'Lieber eine Nummer größer kaufen', 48),
(129, 'Mit Kollegen über den Chef lästern', 49),
(130, 'Sofort Urlaub nehmen', 49),
(131, 'Erstmal Raucherpause ', 49);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) UNSIGNED NOT NULL,
  `question_topics_id` int(11) UNSIGNED NOT NULL,
  `titel` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `correct` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Truncate table before insert `questions`
--

TRUNCATE TABLE `questions`;
--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question_topics_id`, `titel`, `text`, `correct`) VALUES
(4, 2, 'Betriebslogistiker', 'Welche Aufgaben übernimmt ein Betriebslogistiker in einem Unternehmen?', 'Lager (Ein Betriebslogistiker organisiert und überwacht den Warenfluss im Unternehmen, von der Annahme und Lagerung bis zur Ausgabe der Güter, um den Produktionsprozess zu sichern.)'),
(5, 1, 'Anzeigegeräte', 'Welches Teil des Computers wird verwendet, um Bilder und Videos anzusehen?', 'Monitor'),
(6, 2, 'Metalltechniker', 'Was ist das Hauptziel eines Metalltechnikers?', 'Metallteile präzise zu bearbeiten und zusammenzufügen'),
(7, 2, 'Zerspannungstechniker', 'Was denkt ein Zerspanungstechniker, wenn er einen neuen Job beginnt?\r\n\r\n', '„Ich hoffe, ich finde schnell den richtigen Dreh!“'),
(8, 5, 'Router', 'Wofür wird ein Router in einem Netzwerk verwendet?', 'Ein Gerät, das den Datenverkehr zwischen verschiedenen Netzwerken regelt.'),
(9, 1, 'Computer-Output', 'Welches Teil des Computers wird verwendet, um Ton zu erzeugen?', 'Lautsprecher'),
(10, 4, 'Syntax', 'Welches Symbol wird in den meisten Programmiersprachen verwendet, um eine Zeile zu beenden?\r\n', '; (Semikolon)'),
(11, 1, 'Mausfunktion', 'Was hilft dir eine Computermaus zu tun?', 'Bewegen'),
(12, 5, 'Was ist WLAN?', 'Was ist WLAN?', 'Ein drahtloses Netzwerk.'),
(13, 4, 'Was ist ein Computerprogramm?', 'Wie nennt man eine Liste von Anweisungen, die ein Computer ausführen soll?', 'Programm'),
(14, 4, 'Unterscheidung von Programmiersprachen und Sprachen', 'Welche der vier Sprachen ist keine Programmiersprachen?', 'Englisch'),
(15, 5, 'verschiedene Netzwerke verbinden', 'Welches Gerät verbindet verschiedene Netzwerke miteinander?', 'Router'),
(18, 3, 'Lehre', 'Welche Fähigkeiten erwirbt man während der Lehre als Elektriker?', 'In der Lehre als Elektriker lernt man, elektrische Installationen durchzuführen, elektrische Systeme zu warten und Störungen zu \r\nbeheben \r\n'),
(19, 3, 'Dauer', 'Wie lange dauert die Lehre als Elektriker?', 'Die Lehre dauert in der Regel 3 bis 4 Jahre.'),
(20, 3, 'LAP', 'was bedeutet die abkürzung <strong>LAP</strong>', 'Lehrabschlussprüfung'),
(21, 1, 'Zentralprozessor (CPU)', 'Was ist die Hauptfunktion der CPU in einem Computer?', 'Informationen verarbeiten'),
(22, 1, 'Computer-input', 'Welches der folgenden ist ein Beispiel für ein input-gerät?', 'Tastatur'),
(23, 3, 'Berufsausbildung', 'Wie lange dauert eine typische Berufsausbildung?', '3 Jahre'),
(24, 1, 'Drucker', 'Was ist die Hauptfunktion eines Druckers?', 'Dokumente drucken'),
(25, 3, 'Geld', 'Was bekommt der Lehrling jeden Monat?', 'Lehrlingsentschädigung'),
(26, 3, 'wer führt Ausbildung durch', 'Wer führt in einem Betrieb die Ausbildung durch?', 'der Ausbildner'),
(27, 2, 'Wie sieht der Arbeitsalltag aus?', 'Wie sieht ein typischer Arbeitstag für einen KFZ-Mechaniker aus?', 'Autos reparieren'),
(28, 2, 'Welche Qualifikationen sind erforderlich?', 'Welche Qualifikation benötigt man in der Regel, um als Arzt/Ärztin zu arbeiten?', 'Studium der Humanmedizin'),
(29, 2, 'Was steckt dahinter?', 'Welche Hauptaufgabe hat ein/e Softwareentwickler/in?', 'Entwicklung von Computerprogrammen'),
(30, 5, 'Verbindung', 'Was ist ein guter Wert für einen Ping?', '20-50 ms'),
(31, 2, 'KFZ-Mechatronik', 'Wo arbeiten KFZ-Mechatroniker', 'Autohäusern, Werkstatt'),
(33, 1, 'PSU', 'Was ist der Zweck eines Netzteils (PSU) in einem Computer?', 'Das Netzteil wandelt den Strom aus der Steckdose um und versorgt alle Computerkomponenten mit der nötigen Energie.'),
(36, 2, 'IT-Support', 'Was macht ein IT-Support-Spezialist?', 'Ein IT-Support-Spezialist hilft bei technischen Problemen mit Computern und Software, indem er Lösungen anbietet und sicherstellt, dass alles reibungslos funktioniert.'),
(38, 4, 'PC', 'Was ist der schnellste Weg einen PC zu schrotten?', 'Im Registry-Editor alle Dateien löschen'),
(39, 4, 'Spiel-Code\r\n', 'Mit welche Programmiersprache lässt sich am besten ein Spiel programmieren', 'C\x2b\x2b'),
(40, 2, 'Datenbank', 'Was sind die Hauptunterschiede zwischen einer relationalen und einer nicht-relationalen Datenbank?', 'Relationale Datenbanken nutzen Tabellen und SQL, während nicht-relationale Datenbanken flexiblere Formate und oft bessere Skalierbarkeit bieten.\r\n\r\n\r\n'),
(41, 1, 'SSD/HDD', 'wie unterscheidet sich die Leistung von einer SSD zu eine HDD', ' SSDs sind schneller, da sie keine beweglichen Teile haben'),
(42, 4, 'List Python', 'Was ist der Unterschied zwischen einer Liste und einem Tuple in Python?', 'Eine Liste ist veränderbar (mutable), während ein Tuple unveränderbar (immutable) ist.'),
(43, 1, 'Unterschied zwischen SSDs und HDDs', 'Was ist der Hauptunterschied zwischen SSDs und HDDs?', 'SSDs sind schneller und haben keine beweglichen Teile, während HDDs langsamer sind und'),
(44, 3, 'Lehre in Österreich', 'Welche Lehre kann nicht in Österreich machen', 'Tropische Agrarwissenschaften'),
(45, 3, 'Projektbasiertem', 'Was sind die Vorteile von projektbasiertem Lernen?', 'Projektbasiertes Lernen fördert kritisches Denken, Teamarbeit und praktische Anwendung von Wissen.'),
(46, 5, 'Router in ein Netzwerk', 'Was ist der Zweck eines Routers in einem Netzwerk? ', 'Ein Router leitet Datenpakete zwischen verschiedenen Netzwerken weiter und verbindet lokale'),
(47, 5, 'IP-Netzwerk', 'Was ist eine IP-Adresse in einem Netzwerk', 'Eine eindeutige Kennung, die jedem Gerät in einem Netzwerk zugewiesen wird, um die Kommunikation zu ermöglichen.'),
(48, 1, 'RAM ', 'Auf was sollte man beim Kauf neuer RAM-Sticks besonders achten?', 'Zu prüfen, mit welcher DDR-Generation das Motherboard kompatibel ist'),
(49, 3, 'Benehmen', 'Wie sollte man beim ersten Arbeitstag auftreten?', 'Respektvoll und aufmerksam');

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE `topics` (
  `id` int(11) UNSIGNED NOT NULL,
  `topic` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Truncate table before insert `topics`
--

TRUNCATE TABLE `topics`;
--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`id`, `topic`) VALUES
(2, 'Beruf'),
(4, 'Coding'),
(1, 'Hardware'),
(3, 'Lehre'),
(5, 'Netzwerke');
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
