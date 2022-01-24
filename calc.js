function calc(id, a, b) {
	const isNotValid = typeof a !== 'number' || typeof b !== 'number' || id === undefined;
	if (isNotValid) {
		console.log("error");
	} else {
	switch (id) {
		case'isNotValid':
		console.log("Error");
		break;

		case 'sum':
			return a + b;

		case 'sub':
			return a - b;
			
		case 'multi':
			return a * b;
			
		case 'div':
			return a / b;
			
		case 'erect':
			return a ** b;
			break;
		case 'remains':
			return a % b;
			
		default:
			return 'Unknown operation';
	}
}
}

console.log(calc('remains', 9, 2));