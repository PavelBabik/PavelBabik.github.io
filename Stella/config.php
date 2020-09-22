<?php
$mailto = "pasha.rv1234@gmail.com";
$charset = "windows-1251";
$subject = $_POST['user_phone'];
$content = "text/plain";
$message = $_POST['user_phone'];
$statusError = "";
$statusSuccess = "";
$errors_name = '������� ���� ���';
$errors_mailfrom = '������� ���� E-mail �����';
$errors_incorrect = '��������� ��������� ��� E-mail �����';
$errors_message = '�������� ����� ������ ���������';
$errors_subject = '������� ���� ���������';
$captcha_error = 'Error capcha';
$send = 'Send';
?>