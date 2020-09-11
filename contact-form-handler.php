<?php
echo !extension_loaded('openssl')?"Not Available":"Available";
use phpmailer\phpmailer\phpmailer;
$email = $_POST['email'];
$subject = $_POST['subject'];
$body = $_POST['message'];
require_once 'phpmailer/PHPMailer.php';
require_once "phpmailer/SMTP.php";
require_once "phpmailer/Exception.php";
$mail = new PHPMailer();
$mail->SMTPDebug = true;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = "pkpulsefall@gmail.com";
$mail->Password = 'usmfsueltzbhnsac';
$mail->Port = 465;
$mail->SMTPSecure = "ssl";

// $mail->isHTML(true);
$mail->setFrom($email, "user");
$mail->addAddress("hakimotteybusiness@gmail.com");
$mail->Subject = $subject;
$mail->Body = $body;

if($mail->send()){
    echo "Email is sent";
}
else{
    echo "Something is wrong".$mail->ErrorInfo;
}
?>