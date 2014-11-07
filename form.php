<?php

    $to = "galeshare@gmail.com"; /*Your Email*/
    $subject = "Messsage from Pereira Digital Media Template"; /*Issue*/
    $date = date ("l, F jS, Y");
    $time = date ("h:i A");
    $msg="

    Message sent from ARCADIA on date  $date, hour: $time.\n
    Name: $_REQUEST[name]
    Email: $_REQUEST[email]
    Phone: $_REQUEST[phone]
    Subject: $_REQUEST[subject]
    Message:

    $_REQUEST[message]";

    mail($to, $subject, $msg, "From: $_REQUEST[email]");
    header( 'Location: index.html' ) ;

?>
