<?php 

    /*"https://api.telegram.org/bot1393650704:AAHfEt7B3LQwFv8zJqJM3gdye8rrjJgJRh4/getUpdates"*/ 
    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;

    $mail->CharSet = 'utf-8';

    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    $email = $_POST['user_email'];
    $mes = $_POST['user_message'];
    $name1 = $_POST['user_name'];
    $phone1 = $_POST['user_phone'];
    $mail1 = $_POST['user_email'];
    $mes1 = $_POST['user_message'];
    
    $token = "1393650704:AAHfEt7B3LQwFv8zJqJM3gdye8rrjJgJRh4";
    $chat_id = "-495534704";
    $txt ='';
    $arr = array(
        'Відпрвник: '=> $name1,
        'Телефон: '=> $phone1,
        'Email: '=> $mail1,
        'Повідомлення: '=> $mes1
    );

    foreach($arr as $key => $value) {
        $txt .="<b>".$key."</b> ".$value."%0A";
    };
    
    $sendToTelegram=fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    $mail->IsSMTP();

    $mail->Host = 'smtp.meta.ua';
    $mail->SMTPDebug = 0;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->SMTPAutoTLS = false;

    $mail->Username = 'pavlobabik@meta.ua';
    $mail->Password = 'Natawenka88';

    $mail->setFrom('pavlobabik@meta.ua');
    $mail->addAddress('pasha.rv1234@gmail.com');
    $mail->isHTML(true);

    $mail->Subject = 'Заявка з сайту Stela';
    $mail->Body    = '' .$name . ' залишив заявку.<br>Його телефон ' .$phone. '<br>Його пошта: ' .$email.'<br>Його повідомлення: ' .$mes;
    $mail->AltBody = '';

    if(!$mail->send()) {
        echo 'Mailer Error:';
    } else {
        header('location: thank-you.html');
    }
?>