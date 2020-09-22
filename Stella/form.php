<?
include('kcaptcha/kcaptcha.php');
session_start();
require_once("config.php");
require_once("kcaptcha/util/script.php");

if ($_POST['act']== "y")
{
    if(isset($_SESSION['captcha_keystring']) && $_SESSION['captcha_keystring'] ==  $_POST['keystring'])
    {
        
        if (isset($_POST['user_name']) && $_POST['user_name'] == "")
        {
         $statusError = "$errors_name";
        }
        elseif (isset($_POST['user_phone']) && $_POST['user_phone'] == "")
        {
         $statusError = "$errors_mailfrom";
        }
        // elseif(isset($_POST['posEmail']) && !preg_match("/^([a-z,._,0-9])+@([a-z,._,0-9])+(.([a-z])+)+$/", $_POST['posEmail']))
        // {
        //  $statusError = "$errors_incorrect";

        //  unset($_POST['posEmail']);
        // }
        // elseif (isset($_POST['posRegard']) && $_POST['posRegard'] == "")
        // {
        //  $statusError = "$errors_subject";
        // }
        // elseif (isset($_POST['posText']) && $_POST['posText'] == "")
        // {
        //  $statusError = "$errors_message";
        // }

elseif (!empty($_POST))
{   
 $headers  = "MIME-Version: 1.0\r\n";
 $headers .= "Content-Type: $content  charset=$charset\r\n";
 $headers .= "Date: ".date("Y-m-d (H:i:s)",time())."\r\n";
 $headers .= "From: \"".$_POST['posName']."\" <".$_POST['posEmail'].">\r\n";
 $headers .= "X-Mailer: My Send E-mail\r\n";

 mail("$mailto","$subject","$message","$headers");

 unset($name, $posText, $mailto, $subject, $posRegard, $message);

 $statusSuccess = "$send";
}

       }else{
             $statusError = "$captcha_error";
             unset($_SESSION['captcha_keystring']);
        }
}
?>