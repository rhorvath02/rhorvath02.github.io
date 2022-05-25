<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@rhorvath.info';

$email_subject = 'New Form Submission';

$email_body = "Name: $name.\n";
                "Email: $email.\n";
                "Subject: $subject.\n";
                "Message: $message.\n";

$to = 'rhorvath@utexas.edu';

$headers = "From: $email_from \r\n";

$headers .="Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html")

?>