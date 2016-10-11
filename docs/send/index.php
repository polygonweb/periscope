<?php

$global_email = "aleck.bv@yandex.ru";
//$GLOBALS['geg'] = $global_email;
//$GLOBALS['smtp'] = "smtpout.secureserver.net";

$name = htmlspecialchars( trim( $_POST['client-name'] ) );
$tel = htmlspecialchars( trim( $_POST['client-tel'] ) );

if ( strlen( $name ) <= 0 || strlen( $tel ) <= 0 )
    return 0;

// Set the INI file to smtp
//ini_set("SMTP", $GLOBALS['smtp']);

$subject = 'Заявка с сайта Periscope';
$headers = "";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$message = "
    Заказчик:<br />
    <b>{$name}</b><br />
    Телефон:<br />
    <b>{$еул}</b><br />
    <br /><br />
    <b>Сообщение:</b> <br />{$message}<br />
";

$send = mail($global_email, $subject, $message, $headers);

if ($send)
    echo 1;
else
    echo 0;
?>