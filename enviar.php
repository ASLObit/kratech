<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$header = 'From: '. $email . " \r\n";
$header .= 'X-Mailer: PHP/' . phpversion() . " \r\n";
$header .= 'Mime-Version: 1.0 \r\n';
$header .= 'Content-Type: text/plain';

$mensaje = 'El mensaje fue enviado por: ' . $nombre . ' \r\n';
$mensaje .= 'Su correo es: '. $email . ' \r\n';
$mensaje .= 'Teléfono de contacto: '. $phone . ' \r\n';
$mensaje .= 'Mensaje: '. $_POST['mensaje'] . ' \r\n';
$mensaje .= 'Enviado el: '. date('d/m/Y', time());

$para = 'andres@kratech.co';
$asunto = 'Correo enviado desde la web de Kratech';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>