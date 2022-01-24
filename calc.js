function calc(id, a, b) {
	let result;
	const mistake = (typeof a !== 'number' || typeof b !== 'number' || id === undefined);
	switch (id) {
		case 'Error':
			break;
		case 'sum':
			return a + b;
			break;
		case 'sub':
			return a - b;
			break;
		case 'multi':
			return a * b;
			break;
		case 'div':
			return a / b;
			break;
		case 'erect':
			return a ** b;
			break;
		case 'remains':
			return a % b;
			break;
		default:
			return 'Unknown operation';
	}
}

console.log(calc('remains', 11, 2));