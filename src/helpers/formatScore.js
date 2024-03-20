export function formatScore(score, type) {
	if (type === 'percentage') return `${score}%`;
	if (type === 'decimal') {
		const decimal = score / 100;
		return decimal;
	}
	if (type === 'letter-grades') {
		let letterGrade;
		if (score >= 95) letterGrade = 'A+';
		if (score >= 93) letterGrade = 'A';
		if (score >= 90) letterGrade = '-A';
		if (score >= 85) letterGrade = 'B+';
		if (score >= 83) letterGrade = 'B';
		if (score >= 80) letterGrade = 'B-';
		if (score >= 75) letterGrade = 'C+';
		if (score >= 73) letterGrade = 'C-';
		if (score >= 70) letterGrade = 'C';
		if (score >= 65) letterGrade = 'D';
		if (score >= 60) letterGrade = 'D-';
		letterGrade = 'F';

		return letterGrade;
	}
}
