let a, b, c;

function sum() {
	a = parseInt(prompt("Введите первое число", ""));
	b = parseInt(prompt("Введите второе число", ""));
	c = a + b;
	alert("Результат сложения: " + c);
}

function sub() {
	a = parseInt(prompt("Введите первое число", ""));
	b = parseInt(prompt("Введите второе число", ""));
	c = a - b;
	alert("Результат вычитания: " + c);
}

function mul() {
	a = parseInt(prompt("Введите первое число", ""));
	b = parseInt(prompt("Введите второе число", ""));
	c = a * b;
	alert("Результат умножения: " + c);
}

function div() {
	a = parseInt(prompt("Введите первое число", ""));
	b = parseInt(prompt("Введите второе число", ""));
	c = Math.ceil((a / b) * 100) / 100;
	alert("Результат деления: " + c);
}