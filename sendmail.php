<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset=utf-8>
	<meta name=""description="" content="World Evolution">
	<meta name=viewport content="width=device-width, initial-scale=1">
	<link rel="icon" href="img/Imagem1.ico" />
	<link href='http://fonts.googleapis.com/css?family=Fredoka+One|Open+Sans:300italic,400,700,300' rel='stylesheet' type='text/css'>
	<title>World Evolution</title>

<style>
	body{
		color:#000;
		font-size:2em;
		text-align:center;
		
		font-family: 'Open Sans', sans-serif;
	}

	body
{
  width: 95%; 
  height:100%;
  margin:0em 5%;
  background-color:#8ec1da;
  background-image: url("http://oderalon.net/palimpsesto/wp-content/uploads/2012/06/m35_20031101_300f45_5min_fuji1600.jpg");
  background-position: center bottom;
  animation: animatedBackground 30s linear infinite;
  /* Safari and Chrome: */
  -webkit-animation: animatedBackground 30s linear infinite;
}
@keyframes animatedBackground 
{
  from { background-position: 0 100%; }
  to { background-position: 100% 100%; }
}
@-webkit-keyframes  animatedBackground 
{
  from { background-position: 0 100%; }
  to { background-position: 100% 100%; }
}
#content
{
  position:fixed;
  top:5em;

  width:19em;
  background-color:rgba(1,1,1,0.5);
  color:white;
  padding:2em;
  border-bottom-right-radius: 5em;
  -webkit-border-bottom-right-radius: 5em;
   border-top-left-radius: 5em;
  -webkit-border-top-left-radius: 5em;
}
</style>
</head>
<body>
	
	<?php
		$nome=$_POST['nome'];
		$sobrenome=$_POST['sobrenome'];
		$assunto=$_POST['assunto'];
		$mail=$_POST['mail'];
		$msg=$_POST['msg'];
	?>

	<?php
		$to= "wevolo@outlook.com";
		$subject = "$assunto";
		$message = "<strong>Nome:</strong> $nome $sobrenome<br><br>  <strong>E-mail:</strong> $mail <br><br> <strong>Mensagem:</strong> $msg";
		$headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
        $headers .= "X-Priority: 3\n";
        $headers .= "From: $mail";

		mail($to, $subject, $message,$headers);
		echo " <meta http-equiv='refresh' content='10;URL=index.php'>";

	?>

	<div id="content">Mensagem enviada com sucesso! Aguarde alguns segundos que você será redirecionado para o site!</div>

</body>
</html>