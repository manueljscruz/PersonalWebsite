<?php

session_start();

if (isset($_POST['submit'])) 
{
	$name = $_POST['name'];
	$emailFrom = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$bot_check = $_POST['work_related'];

	if($bot_check == 1){
		$_SESSION['error'] = "Go away bot...";
		header("Location: index.php");
		return;
	}
	else{
		
		$headers = "From: ". $emailFrom;
		$txt = "You have received an e-mail from ".$name.".\n\n".$message;
		$emailTo = "contact@manueljscruz.online";

	
	if (mail($emailTo, $subject, $txt, $headers)) 
	{
		$_SESSION['success'] = "Email has been sent.";		
		header("Location: index.php");
		return;
	}
	else
	{
		$_SESSION['error'] = "Something went wrong with the submission, try again...";
		header("Location: index.php");
		return;
	}
	}

}

?>