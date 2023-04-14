/**
 * 
 */
const problems = [
	{
		description: 'Given an array of numbers, find the sum of all its elements. Example: [1, 2, 3, 4] => 10',
		solution: '10'
	},
	{
		description: 'Given an array of strings, return the first element. Example: ["apple", "banana", "cherry"] => "apple"',
		solution: 'apple'
	},
	
];

const problem = document.getElementByld('problem');
const answerInput = document.getElementByld('answer');
const result = document.getElementByld('result');

let currentProblem;

function getRandomProblem(){
	const randomIndex = Math.floor(Math.random() * problems.length);
	currentProblem = problems[randomIndex];
	problem.textContent = currentProblem.description;
}

function checkAnswer(){
	const userAnswer = answerInput.value;
	if  (userAnswer === currentProblem.solution) {
		result.textContent = 'Correct!';
	} else {
		result.textContent = 'Incorrent. Try again.';
	}
}

getRandomProblem();