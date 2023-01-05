const operations = {
	add: '+',
	multi: '*',
	substract: '-',
	div: '/',
}

function calc(action, number1, number2) {
	switch (action) {
		case operations.add:
			return number1 + number2;
			break;
		case operations.multi:
			return number1 * number2;
			break;
		case operations.substract:
			return number1 - number2;
			break;
		case operations.div:
			return (number2 == 0) ? ('на ноль делить нельзя') : number1 / number2
			break;
	}
}
console.log(calc(operations.add, 2, 3));
console.log(calc(operations.multi, 1, 2));
console.log(calc(operations.substract, 3, 2));
console.log(calc(operations.div, 6, 2));
console.log(calc(operations.div, 6, 0));