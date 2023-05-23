<?php
// Get data from form
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email= $_POST['email'];
$website= $_POST['website'];
$message= $_POST['message'];

$to = "yourEmail@gmail.com";
$subject = "Email From Website";

// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message
$txt ="Name = ". $first_name . $last_name . "\r\n Email = "
	. $email . "\r\n Website = " . $website . "\r\n Message =" . $message;

$headers = "From: WebsiteEmail@gmail.com" . "\r\n" .
			"CC: somebodyelse@example.com";
if($email != NULL) {
	mail($to, $subject, $txt, $headers);
}

?>
