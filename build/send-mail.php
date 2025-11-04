<?php
// Fehler-Reporting aktivieren für Debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Log-Datei für Debugging (erstelle debug.log im gleichen Ordner)
function logDebug($message) {
    $logFile = __DIR__ . '/debug.log';
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}

logDebug("Script gestartet");

// Nur POST-Anfragen erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    logDebug("Fehler: Keine POST-Anfrage");
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Nur POST-Anfragen erlaubt']);
    exit;
}

// JSON-Daten empfangen
$input = file_get_contents('php://input');
logDebug("Empfangene Daten: " . $input);

$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    logDebug("JSON-Fehler: " . json_last_error_msg());
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungültige JSON-Daten']);
    exit;
}

// Formulardaten validieren
$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

logDebug("Name: $name, Email: $email");

if (empty($name) || empty($email) || empty($message)) {
    logDebug("Fehler: Leere Felder");
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Bitte alle Felder ausfüllen']);
    exit;
}

// E-Mail-Adresse validieren
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    logDebug("Fehler: Ungültige E-Mail");
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungültige E-Mail-Adresse']);
    exit;
}

// E-Mail-Konfiguration
$to = 'oezdens.web@outlook.de';
$subject = 'Neue Kontaktanfrage von ' . $name;
$email_body = "Neue Kontaktanfrage:\n\n";
$email_body .= "Name: " . $name . "\n";
$email_body .= "E-Mail: " . $email . "\n\n";
$email_body .= "Nachricht:\n" . $message;

// E-Mail-Header
$headers = "From: kontakt@oezdens.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

logDebug("Versuche E-Mail zu senden an: $to");

// E-Mail senden
$mail_sent = @mail($to, $subject, $email_body, $headers);

if ($mail_sent) {
    logDebug("E-Mail erfolgreich gesendet");
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Nachricht erfolgreich gesendet']);
} else {
    $error = error_get_last();
    logDebug("E-Mail-Fehler: " . print_r($error, true));
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Fehler beim Senden der E-Mail']);
}
?>
