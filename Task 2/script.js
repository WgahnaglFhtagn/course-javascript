let a, b, c;

function sum() {
	do {
		a = parseInt(prompt("Введите первое число", ""));
		b = parseInt(prompt("Введите второе число", ""));
	} while(isNaN(a) || isNaN(b));
	c = a + b;
	alert("Результат сложения: " + c);
}

function sub() {
	do {
		a = parseInt(prompt("Введите первое число", ""));
		b = parseInt(prompt("Введите второе число", ""));
	} while(isNaN(a) || isNaN(b));
	c = a - b;
	alert("Результат вычитания: " + c);
}

function mul() {
	do {
		a = parseInt(prompt("Введите первое число", ""));
		b = parseInt(prompt("Введите второе число", ""));
	} while(isNaN(a) || isNaN(b));
	c = a * b;
	alert("Результат умножения: " + c);
}

function div() {
	do {
		a = parseInt(prompt("Введите первое число", ""));
		b = parseInt(prompt("Введите второе число", ""));
	} while(isNaN(a) || isNaN(b));
	c = Math.ceil((a / b) * 100) / 100;
	alert("Результат деления: " + c);
}