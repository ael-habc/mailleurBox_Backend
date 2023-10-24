<?php
require_once './twilio-php-main/src/Twilio/autoload.php'; // Load Twilio PHP library

use Twilio\Rest\Client;

function sendSMS($recipientNumber)
{
    // Your Twilio credentials
    $accountSid = 'AC588ff15c0212dbe5e75d485095b56fde';
    $authToken = 'aeb1eea31a2f84dc71db6d3f95119fc6';
    $twilioNumber = '+17654444631';

    // Create a Twilio client
    $twilioClient = new Client($accountSid, $authToken);

    try {
        // Send the SMS
        $twilioClient->messages->create(
            $recipientNumber,
            [
                'from' => $twilioNumber,
                // Your Twilio phone number
                'body' => "Hello, this is a test message from Twilio!"
            ]
        );

        return true; // SMS sent successfully
    } catch (Exception $e) {
        // Handle error
        echo $e->getMessage();
        return false; // SMS sending failed
    }
}

// Example usage
// $recipientNumber = '+212637179071'; 
// $message = 'Hello, this is a test message from Twilio!';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phoneNumber = $_POST["phoneNumber"];

    if (sendSMS($phoneNumber)) {
        echo "SMS sent successfully!";
    } else {
        echo "Failed to send SMS!";
    }
}
?>