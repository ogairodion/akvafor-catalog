<?php

if($_POST) {
  $to = "shop@a-filer.ru";
  $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
  $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_STRING);
  $form = filter_var($_POST["form"], FILTER_SANITIZE_STRING);
  $headers .= "Reply-To: Aquafor <info@a-filter.ru>\r\n"; 
  $headers .= "Return-Path: Aquafor <info@a-filter.ru>\r\n"; 
  $headers .= "From: Aquafor <info@a-filter.ru>\r\n";  
  $headers .= "Organization: Aquafor\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8\r\n";
  $headers .= "X-Priority: 3\r\n";
  $headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;

  if(isset($_POST["form"])) {
    $leadform =  '<b> Лид с формы : '.$form.'</b><br>';
  }

  if(isset($_POST["name"])) {
    $username =  'Имя : '.$name. '<br>';
  }

  if(isset($_POST["phone"])) {
    $userphone =  'Телефон : '.$phone. '<br>';
  }

  if(isset($_POST["email"])) {
    $usermail =  'Email : '.$email. '<br>';
  }

  $body =  $leadform . $username . $usermail . $userphone;

  $subject = "Аквафор";
  if(@mail($to, $subject, $body, $headers)) {
    $output = '<h2 class="title title--h2 title--thanks">Спасибо!</h2><div class="form__thanks-text">Ваша заявка была успешно принята. Наш менеджер свяжется с вами в ближайшее время.</div><button class="btn btn--thanks btn--blue" data-fancybox-close><span>ОK</span></button>';
    die($output);
  } else {
    $output = '<h2 class="title title--h2">Заявка не отправлена!</h2>';
    die($output);
  }
}
?>