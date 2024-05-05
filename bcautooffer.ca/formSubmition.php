<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
error_reporting(E_ALL);
ini_set('display_errors', 1);
file_put_contents("post_data.log", print_r($_POST, true));
require 'vendor/autoload.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Path to PHPMailer autoloader

// Initialize an empty array to store submitted data
$submitted_data = array();

// Check if data is submitted via POST method
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect submitted data
    $email = $_POST["email"];
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    
    // Append submitted data to the array
    $submitted_data[] = array(
        'Name' => $name,
        'Email' => $email,
        'Phone' => $phone
    );

    // Print the array in the console
    echo '<script>';
    echo 'console.log(' . json_encode($submitted_data) . ');';
    echo '</script>';

    // Set SMTP details
    $smtpHost = 'smtp.gmail.com';
    $smtpUsername = 'lion.moneim80@gmail.com'; // Your Gmail address
    $smtpPassword = 'elcb chyg kruh wqyl'; // Your Gmail password
    $smtpPort = 587; // SMTP port (TLS)
    $mail->SMTPDebug = 2;

    // Recipient email address
    $to = 'lion.moneim80@gmail.com';

    // Subject
    $subject = 'Form Submission';

    // Email body
    $message = "
        <h3>Name: $name</h3>
        <h3>Email: $email</h3>
        <h3>Phone: $phone</h3>
    ";

    // Create PHPMailer object
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUsername;
        $mail->Password = $smtpPassword;
        $mail->SMTPSecure = 'tls';
        $mail->Port = $smtpPort;

        // Email content
        $mail->setFrom($smtpUsername);
        $mail->addAddress($to);
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;

        // Send email
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
