<?php
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$report = $_POST['report'];

$email = htmlspecialchars($email);
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$report = htmlspecialchars($report);

$email = trim(urldecode($email));
$name = trim(urldecode($name));
$phone = trim(urldecode($phone));
$report = trim(urldecode($report));

$text = $email . " " . $name . " " . $phone . " " . $report . "\n";

$file=fopen('data.txt','a+');
fputs($file, $text);
fclose($file);

?>