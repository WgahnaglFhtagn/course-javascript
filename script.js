function game(context, cellSize) {
	var arr = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 0]
	];
	
	function cellView(x, y) {
		context.fillStyle = "#32cd32";
		context.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
	}
	
	function numView() {
		context.font = "bold " + (cellSize / 2) + "px Sans";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillStyle = "#000";
	}
	
	this.getNullCell = function() {
		for (var i = 0; i < 4; i++){
			for (var j = 0; j < 4; j++){
				if (arr[j][i] === 0){
					return {'x': i, 'y': j};
				}
			}
		}
	}
	
	this.draw = function() {
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				if (arr[i][j] > 0) {
					cellView(j * cellSize, i * cellSize);
					numView();
					context.fillText(arr[i][j], j * cellSize + cellSize / 2, i * cellSize + cellSize / 2);
				}
			}
		}
	};
	
	this.move = function(x, y) {
		var nullX = this.getNullCell().x;
		var nullY = this.getNullCell().y;
		if (((x - 1 == nullX || x + 1 == nullX) && y == nullY) || ((y - 1 == nullY || y + 1 == nullY) && x == nullX)) {
			arr[nullY][nullX] = arr[y][x];
			arr[y][x] = 0;
		}
	};
	
	function getRandomBool() {
		if (Math.floor(Math.random() * 2) === 0) {
			return true;
		}
	}
	
	this.mix = function(stepCount) {
		var x,y;
		for (var i = 0; i < stepCount; i++) {
			var nullX = this.getNullCell().x;
			var nullY = this.getNullCell().y;
			var hMove = getRandomBool();
			var upLeft = getRandomBool();
			if (!hMove && !upLeft) { y = nullY; x = nullX - 1;}
			if (hMove && !upLeft)  { x = nullX; y = nullY + 1;}
			if (!hMove && upLeft)  { y = nullY; x = nullX + 1;}
			if (hMove && upLeft)   { x = nullX; y = nullY - 1;}
			if (0 <= x && x <= 3 && 0 <= y && y <= 3) {
				this.move(x, y);
			}
		}
	};
	
}

window.onload = function() {
	var canvas = document.createElement("canvas");
		canvas.setAttribute('id', 'canvas');
		canvas.width  = 320;
		canvas.height = 320;
	document.body.appendChild(canvas);
	var cellSize = canvas.width / 4;
	var context = canvas.getContext("2d");
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	var g = new game(context, cellSize);
	g.mix(300);
	g.draw();
}