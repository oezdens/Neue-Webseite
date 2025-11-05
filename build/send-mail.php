<?php
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/debug.log');

file_put_contents(__DIR__ . '/debug.log', date('Y-m-d H:i:s') . " - Request received\n", FILE_APPEND);

header('Content-Type: application/json');

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$json = file_get_contents('php://input');
file_put_contents(__DIR__ . '/debug.log', "JSON input: $json\n", FILE_APPEND);

$data = json_decode($json, true);

if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    file_put_contents(__DIR__ . '/debug.log', "Invalid data received\n", FILE_APPEND);
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungültige Daten']);
    exit;
}

$name = strip_tags($data['name']);
$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
$message = strip_tags($data['message']);

if (!$email) {
    file_put_contents(__DIR__ . '/debug.log', "Invalid email: {$data['email']}\n", FILE_APPEND);
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungültige E-Mail-Adresse']);
    exit;
}

$to = 'oezdens.web@outlook.de';
$subject = 'Neue Kontaktanfrage von ' . $name;
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$emailBody = "Neue Kontaktanfrage:\n\n";
$emailBody .= "Name: $name\n";
$emailBody .= "E-Mail: $email\n\n";
$emailBody .= "Nachricht:\n$message\n";

$result = @mail($to, $subject, $emailBody, $headers);

if ($result) {
    file_put_contents(__DIR__ . '/debug.log', "Email sent successfully\n", FILE_APPEND);
    echo json_encode(['success' => true, 'message' => 'Nachricht erfolgreich gesendet']);
} else {
    file_put_contents(__DIR__ . '/debug.log', "Failed to send email\n", FILE_APPEND);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'E-Mail konnte nicht gesendet werden']);
}