<?php
$num = rand(1,5);

switch ($num){

case 1:
	   $answer = "yes";
	   break;
 case 2:
	   $answer = "no";
	   case 3:
	   $answer = "maybe";
	   break;
case 4:
	   $answer = "outlook  not so good";
	   break;
	   case 5: 
		$answer = "please try again";
	   break;
	  }

echo $answer;

    