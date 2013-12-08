var rowIndex = "";
var tdIndex = "";
var currentGrid = create2DArray(9); //hold all numbers in the current grid 
var answerGrid = create2DArray(9);  // hold all numbers in answer grid
var totalNumberOfGameFile = 4; 
var cellFilled = 0;  // track how many cells filled with a number

var gameStatus = 0;  // 0 means that game has not started
					// 1 means that game has started
// var zoneSet;			
			
					
$(document).ready(function() {
	$("#start_game").click(function() {
		
		// prevent player to hit START button accidentally to start a new game
		if (gameStatus == 1) {
			var answer;
			answer = confirm("This game has not finished. Do you really want to restart a new game");
			if ( answer == false ) {
				return;
			}
		}
		reset();
		var gameDataFile = getRandomGameDataFile();
		
		//console.log ("gameDataFile: " + gameDataFile);
		createAnswerGrid(gameDataFile);
		
		setCellBackgroundColor ();
		
		//console.log("Instructor only mode");		
		$.get(gameDataFile, function(result) {
			var regex = new RegExp ("[s]");
			var lines = result.split("\n");

			for (var i = 0, len = 81; i < len; i++) {
				if ( lines[i].match(regex)) {
					// console.log(lines[i]);
					var x;
					var y;
					var value;
					var fields = lines[i].split(/,/);
					x = fields[0];
					y = fields[1];
					value = fields[2];
					var cell = $(".grid tr:eq(" + x + ") td:eq(" + y + ")").html( value );
					cell.attr('readonly', "readonly");
					cell.attr('class', 'unchanged');
					currentGrid[x][y] = value;
					// console.log(currentGrid[x][y]);
					cellFilled += 1;
					// console.log ("number of cell filled: " + cellFilled);
				}
			}
		});
		// console.log ("gameDataFile: " + gameDataFile);
		createAnswerGrid(gameDataFile);
		gameStatus = 1;

		
	});
})	

$(document).ready(function() {
	$("#start_game_i").click(function() {
		
		// prevent player to hit START button accidentally to start a new game
		if (gameStatus == 1) {
			var answer;
			answer = confirm("This game has not finished. Do you really want to restart a new game");
			if ( answer == false ) {
				return;
			}
		}

		reset();
		var gameDataFile = getRandomGameDataFile();
		
		//console.log ("gameDataFile: " + gameDataFile);
		createAnswerGrid(gameDataFile);
		setCellBackgroundColor ();

		//console.log("Instructor only mode");		
		$.get(gameDataFile, function(result) {
			var regex = new RegExp ("[is]");
			var lines = result.split("\n");
			// console.log("In current grid (total lines): " + lines.length);
			for (var i = 0, len = 81; i < len; i++) {
				if ( lines[i].match(regex)) {
					// console.log(lines[i]);
					var x;
					var y;
					var value;
					var fields = lines[i].split(/,/);
					x = fields[0];
					y = fields[1];
					value = fields[2];
					var cell = $(".grid tr:eq(" + x + ") td:eq(" + y + ")").html( value );
					cell.attr('readonly', "readonly");
					cell.attr('class', 'unchanged');
					currentGrid[x][y] = value;
					// console.log(currentGrid[x][y]);
					cellFilled += 1;
					// console.log ("number of cell filled: " + cellFilled);
				}
			}
		});
		// console.log ("gameDataFile: " + gameDataFile);
		createAnswerGrid(gameDataFile);
		gameStatus = 1;
	});

})

// system have some game data files, pick one randomly
function getRandomGameDataFile () {
	var min = 1;
	var max = totalNumberOfGameFile;
	var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	var gameDataFile = '/files/game' + randomNumber + ".txt";
//	var gameDataFile = "/files/game4.txt";
	return gameDataFile;
}

// cleanup data left from the previous game
function reset () {
	cellFilled = 0;
	emptyGrid(currentGrid); 	
	emptyGrid(answerGrid);
	resetTable();	
}

function emptyGrid (grid) {
	for (var x = 0; x < 9; x++) {
		for (var y = 0; y < 9; y++) {
			grid[x][y] = "";
		}
	}
}

// also need to cleanup number, attributes in all table cells 
function resetTable () {
	for (var x = 0; x< 9; x++) {
		for (var y = 0; y < 9; y++) {
			var cell = $(".grid tr:eq(" + x + ") td:eq(" + y + ")").html("");
			cell.removeAttr('readonly');
			cell.removeAttr('class');
		}
	}	

}
// build answer grid to compare what the player's final answer
function createAnswerGrid (datafile) {
	$.get(datafile, function(data) {
		console.log("In createAnswerGrid: " + datafile);
		var lines = data.split("\n");
		console.log("In createAnswerGrid (total lines): " + lines.length);
		for (var i = 0, len = 81; i < len; i++) {
			// console.log("In createAnswerGrid: " + lines[i]);
			var x;
			var y;
			var value;
			var fields = lines[i].split(/,/);
			x = fields[0];
			y = fields[1];
			value = fields[2];
			// answerGrid is a global variable declared in the beginning of this script
			// console.log("In createAnswerGrid, cell value: " + value);
			answerGrid[x][y] = value;
		}
	});
}

// create 2 dimensional array to hold grid data
function create2DArray(rows) {
  var arr = [];
  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }
  return arr;
}

// compare the data of two 2D arrays of size (9x9)
// retrun true if they are the same, otherwise false
function compareArray (array1, array2) {

	for (var i=0; i<=8; i++ ) {
		for (var j=0; j<=8; j++ ) {
			// console.log(array1[i][j] + ":" + array2[i][j]);
			if (array1[i][j] != array2[i][j]) {
				return false;
			}
		}	
	}	
	return true;
}

// click to select a cell to enter a number
$(function () {
	$(".grid tr td").click(function() {
		// console.log("Clicked");
		var value = $(this).attr("readonly");

		// initial setup cells are not allowed to change
		// they are purple in color
		if (  value == "readonly" ) {
			alert ("This cell is not changed.");
		} else {
			var selectedCellRowInd = $(this).parent().index('.grid tbody tr');
			console.log(selectedCellRowInd);
			var selectedCellTdInd = $(this).index('.grid tbody tr:eq(' + selectedCellRowInd + ') td');
			console.log(selectedCellTdInd);

			setCellBackgroundColor();
			rowIndex = selectedCellRowInd;
			tdIndex = selectedCellTdInd;
			var cell = $(".grid tr:eq(" + rowIndex + ") td:eq(" + tdIndex + ")");
			cell.css("background-color", "yellow");
			
			// if ( rowIndex === "" ) {
				// console.log("case 1");
				// rowIndex = selectedCellRowInd;
				// tdIndex = selectedCellTdInd;
				// console.log("case 1: " + rowIndex);
				// console.log("case 1: " + tdIndex);
				// $(this).toggleClass("focused_cell");
			// } else if ((rowIndex != selectedCellRowInd) || (tdIndex != selectedCellTdInd)) {
				// restore the previous selected cell to unselected
				// console.log("before" + rowIndex + ":" + tdIndex);
				// if ($(".grid tr:eq(" + rowIndex + ") td:eq(" + tdIndex + ")").html() === "") {
					// $(".grid tr:eq(" + rowIndex + ") td:eq(" + tdIndex + ")").toggleClass("focused_cell");
				// }
				// rowIndex = selectedCellRowInd;
				// tdIndex = selectedCellTdInd;
				// console.log("after" + rowIndex + ":" + tdIndex);
				// $(".grid tr:eq(" + rowIndex + ") td:eq(" + tdIndex + ")").toggleClass("focused_cell");
		
			// } else {
				// console.log("Do nothing");
				// $(".grid tr:eq(" + rowIndex + ") td:eq(" + tdIndex + ")").toggleClass("focused_cell");
				// do nothing 
			// }

		}
		
		
	});
});

// pick a number from number pad, the number will be inserted
// to the selected cell  
$(function () {
	$(".number_pad tr td").click(function() {
	
		// if game has not started yet, don't do anything
		// tell the player to start the game
		if ( gameStatus == 0 ) {
			alert ("Game has not started. Please click START to start a new game");
			return;
		} 
	
		var selected_number =  $(this).html();
		console.log(selected_number);
		var selected_cell = $(".grid tr:eq(" + rowIndex + ") td:eq(" + tdIndex + ")");
		if ($(".grid tr:eq(" + rowIndex + ") td:eq(" + tdIndex + ")").html() === "") {
			cellFilled += 1;
			console.log("Number of cell filled: " + cellFilled );
		}
		selected_cell.html(selected_number);
		selected_cell.toggleClass("focused_cell");
		
		// update the cell in the grid  
		currentGrid[rowIndex][tdIndex] = selected_number; 

		// check the grid is fully filled, if yes, compare with answer grid
		if ( cellFilled == 81) {
			if (compareArray (currentGrid, answerGrid)) {
				alert ("Congratulation! Your answer is correct.");
				gameStatus = 0;
				
			} else {
				alert ("Sorry! Your answer is wrong.");
			}
			// console.log("compare the current grid with the answer grid");
		}
		console.log ("Number of cell filled: " + cellFilled);
	});
});

$(function () {
	$(".clear_button").click(function() {
		
		// console.log ("Want to see something here in .clear_button");
		var selected_cell = $(".grid tr:eq(" + rowIndex + ") td:eq(" + tdIndex + ")");
		
		if (selected_cell.html() === "") {
			// do nothing
			console.log ("Equal empty");
		} else  {
		// we only care the cell which has filled with a number
			currentGrid[rowIndex][tdIndex] = "";
			selected_cell.html("");
			cellFilled -= 1;
			// if game status is "finished; need to reset to "not finished"
			if (gameStatus == 0) {
				gameStatus = 1;
			}
		}
		console.log ("Number of cell filled: " + cellFilled);
	});
});

// set implementation here
// 


function isInLightZone (x, y) {

	// console.log("In function isInLightZone");
	var lightZone = [ 	
				"00", "01", "02", "10", "11", "12", "20", "21", "22",
				"06", "07", "08", "16", "17", "18", "26", "27", "28",
				"33", "34", "35", "43", "44", "45", "53", "54", "55",
				"60", "61", "62", "70", "71", "72", "80", "81", "82",
				"66", "67", "68", "76", "77", "78", "86", "87", "88"];
	
	var coordinate_code = "" + x + y ;
	console.log ("coordinate_code: " + coordinate_code + " for " + x + ":" + y);
	 	
	// console.log("lightZone length: " + lightZone.length);			 
	for (var i=0; i < lightZone.length; i++) {
		if ( coordinate_code == lightZone[i] ) {
			return true;
		}
	}
	return false;
}


function setCellBackgroundColor () {

	for (var x = 0; x < 9; x++) {
		for (var y=0; y <9; y++) {
			var tableCell = $(".grid tr:eq(" + x + ") td:eq(" + y + ")");
			if (isInLightZone (x, y)) {
				// var tableCell = $(".grid tr:eq(" + x + ") td:eq(" + y + ")");
				console.log (  x + ":" + y + " in light zone");
				tableCell.css("background-color", "#E0E0E0");
			}
			else {
				tableCell.css("background-color", "white");
			}
		}	
	}
}	
