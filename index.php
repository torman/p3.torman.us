<!DOCTYPE html>
<html>
<head>
	<title><?php if(isset($title)) echo $title; ?></title>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	

	<link rel="stylesheet" type="text/css" href="/css/main.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	<script src="/js/main.js"></script>
	

	
</head>
<body>
<!--body onload="init()";-->	
<div id="container">
<!--div id="container" style="width:850px"-->
<div id="header">Sudoku</div> 
<div id="playingboard">
<table class="grid">
	<tr>
		<td> </td> <td></td>  <td></td> 
		<td ></td> <td></td> <td></td> 
		<td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>

</table>
<br>

<button type="button" class="start_game_button" id="start_game" mode="normal" >NEW GAME</button>&nbsp;&nbsp;

<button type="button" class="start_game_button"  id="start_game_i" mode="instructor_only">NEW GAME (INSTRUSTOR ONLY)</button>&nbsp;&nbsp;
<br><br><br>
</div> <!--playingboard -->

<div id="spacer"></div>

<div id="number_pad_div">
<table class="number_pad">
	<tr>
		<td>1</td>
		<td>2</td>
		<td>3</td>
	</tr>
	<tr>
		<td>4</td>
		<td>5</td>
		<td>6</td>
	</tr>
	<tr>
		<td>7</td>
		<td>8</td>
		<td>9</td>
	</tr>
</table>

<button type="button" class="clear_button">CLEAR</button>
</div>
<!--div id="answer_div" hidden="hidden"> Answer &#40;For Instructors only&#41; -->

<!--  Still not able to make this part work. Just commented out -->
<!--table id="anwser_grid2" >
	<tr>
		<td> </td> <td></td>  <td></td> 
		<td ></td> <td></td> <td></td> 
		<td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>
	<tr>
		<td></td> <td></td>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
	</tr>

</table-->

 <!-- number_pad -->
</div> <!-- container -->




	

</body>
</html>