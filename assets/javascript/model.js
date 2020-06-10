// All the Data for the Game to function

// Global Variables
let playerName = "";
let correct = 0;
let inCorrect = 0;
let counter = 0;
let timer = 0;
let clockRunning = false;
let setInterval;
let intervalId;
let score = 0;
let response;
let responses = [];
let usedQuestions = [];


// Array of Question Objects
let questionsArray = [
	{
		question: "What is the limit of (4x\xB3/11) as x approaches 2?",
		responses: [
				   "17/11",
				   "32/11",
				   "3",
				   "37/11"
				   ],
		correct: "32/11",
		category: "Limits/Continuity",
		value: 100
	},
	{
		question: "What is the limit of (sin(5x)/sin(4x)) as x approaches 0?",
		responses: [
					"5/4",
					"4/5",
					"3/4",
					"2/3"
					],
		correct: "5/4",
		category: "Limits/Continuity",
		value: 200
	},
	{
		question: "What is the limit of (5x\xB2 - 3x)/(16x\xB3 - 8) as x approaches ∞",
		responses: [
					"5/16",
					"-∞",
					"∞",
					"0"
					],
		correct: "0",
		category: "Limits/Continuity",
		value: 300
	},
	{
		question: "If f(x) = (6) / (z\xB2 - 3z - 10), list if the function is continuous in the given order of where x = -2, x = 0, and x = 5.",
		responses: [
					"No, No, No",
					"No, Yes, No",
					"Yes, No, No",
					"Yes, Yes, No"
					],
		correct: "Yes, Yes, No",
		category: "Limits/Continuity",
		value: 400
	},
	{
		question: "Find the derivative of f(x) = 6x\xB3 + 5x\xB2 + x  at x = 2?",
		responses: [
					"36",
					"67",
					"93",
					"95"
					],
		correct: "93",
		category: "Derivatives",
		value: 100
	},
	{
		question: "Find y' through implicit differentiation, if 2y\xB3 + 4x\xB2 - y = x^6",
		responses: [
					"y' = (6x\xB3 - 8x) / (6y\xB2 - 1)",
					"y' = (6y\xB2 - 1) / (6x^5 - 8x)",
					"y' = (6x^5 - 8x) / (6y\xB2 - 1)",
					"y' = (4x^5 - 8x) / (6y\xB2 - 1)"
					],
		correct: "y' = (6x^5 - 8x) / (6y\xB2 - 1)",
		category: "Derivatives",
		value: 200
	},
	{
		question: "A thin sheet of ice is in the form of a circle. If the ice is melting in such a way that the area of the sheet is decreasing at a rate of 0.5 m\xB2/sec, at what rate is the radius decreasing when the area of the sheet is 12m\xB2?",
		responses: [
					"r' = 0.04",
					"r' = -0.04",
					"r' = 0.4",
					"r' = -0.4"
					],
		correct: "r' = -0.04",
		category: "Derivatives",
		value: 300
	},
	{
		question: "If f(x) = (sin(3t)) / (1 + t)\xB2 , what is the first derivative?",
		responses: [
					"(3cos(3t)(1 + t\xB2) - 2t*cos(3t)) / (1 + t\xB2)\xB2",
					"(3sin(3t)(1 + t\xB2) - 2t*cos(3t)) / (1 + t\xB2)\xB2",
					"(3sin(3t)(1 + t\xB2) - 2t*sin(3t)) / (1 + t\xB2)\xB2",
					"(3cos(3t)(1 + t\xB2) - 2t*sin(3t)) / (1 + t\xB2)\xB2"
					],
		correct: "(3cos(3t)(1 + t\xB2) - 2t*sin(3t)) / (1 + t\xB2)\xB2",
		category: "Derivatives",
		value: 400
	},
	{
		question: "Using IVT,  For the function f(x) = x\xB2, show that there is a number “m” between 2 and 3 such that f(m) = 7. Did you get it right?",
		responses: [
					"Yes",
					"No",
					"Not enough information to complete problem",
					"None of the above"
					],
		correct: "Yes",
		category: "Theorems of Calculus",
		value: 100
	},
	{
		question: "Check that function f(x) = x\xB2 - 4x + 3 on the interval [1 , 3] satisfies all conditions of Rolle's theorem and then find all values of x = c such that f '(c) = 0.",
		responses: [
					"It satisfies Rolle's Theorem and c = 2.",
					"It satisfies Rolle's Theorem and c = 4.",
					"It does not satisfy Rolle's Theorem and c = 2.",
					"It does not satisfy Rolle's Theorem and c = 4."
					],
		correct: "It satisfies Rolle's Theorem and c = 2.",
		category: "Theorems of Calculus",
		value: 200
	},
	{
		question: "Determine all the number(s) c which satisfy the conclusion of Mean Value Theorem for h(z) = 4z\xB3 - 8z\xB2 + 7z - 2 on [2, 5].",
		responses: [
					"c = -2.2960",
					"c = -3.6294",
					"c = 3.6294",
					"c = 2.2960"
					],
		correct: "c = 3.6294",
		category: "Theorems of Calculus",
		value: 300
	},
	{
		question: "Determine all the number(s) c which satisfy the conclusion of Mean Value Theorem for A(t) = 8t + e^3t on [-2,3].",
		responses: [
					"c = 1.0973",
					"c = 2.0973",
					"c = -2.0973",
					"c = -1.0973"
					],
		correct: "c = -1.09",
		category: "Theorems of Calculus",
		value: 400
	},
	{
		question: "Find the integral of (5x\xB2 - 8x + 5)",
		responses: [
					"5x\xB3/3 -4x\xB2 + 5x",
					"5x\xB3/2 -4x\xB2 + 5x + C",
					"5x\xB3/3 -4x\xB2 + 5x + C",
					"5x\xB3/2 -4x\xB2 + 5x + C"
					],
		correct: "5x\xB3/3 -4x\xB2 + 5x + C",
		category: "Integrals",
		value: 100
	},
	{
		question: "Find the integral of (7cos(5x))",
		responses: [
					"7sin(5x) / 5 + C",
					"5sin(7x) / 5 + C",
					"7sin(5x) / 5",
					"5sin(7x) / 5"
					],
		correct: "7sin(5x) / 5 + C",
		category: "Integrals",
		value: 200
	},
	{
		question: "Approximate the area between the x-axis and h(x) = 3/x from x=0 to x=1.5 using a right Riemann sum with 3 equal subdivisions.",
		responses: [
					"6.5 units\xB2",
					"5.5 units\xB2",
					"5 units\xB2",
					"5.5 units"
					],
		correct: "5.5 units\xB2",
		category: "Integrals",
		value: 300
	},
	{
		question: "It is estimated that t years from now the population of a certain lakeside community will be changing at the rate of 0.6t\xB2 + 0.2t + 0.5 thousand people per year. Environmentalists have found that the level of pollution in the lake increases at the rate of approximately 5 units per 1000 people. By how manu units will the pollution in the lake increase during the next 2 years?",
		responses: [
					"10 units",
					"5 units",
					"15 units",
					"50 units"
					],
		correct: "15 units",
		category: "Integrals",
		value: 400
	},
	{
		question: "Identify the equation of the line tangent to the point at x = 0 for f(x) = 4arctan(2x)",
		responses: [
					"y = 8x + π/4 ",
					"y = 8x",
					"y = 4x + π/2",
					"y = 4x"
					],
		correct: "y = 8x",
		category: "Miscellaneous Calculus Problems",
		value: 100
	},
	{
		question: "Identify the time where the position function below reaches its minimum velocity, t\u22650 of s(t) = t^4 - 3t\xB3 - 6t\xB2 + 27t ",
		responses: [
					"t = 2",
					"t = 9/4",
					"t = 3",
					"t = -1/2"
					],
		correct: "t = 2",
		category: "Miscellaneous Calculus Problems",
		value: 200
	},
	{
		question: "Which of the following answer choices is a solution to the differential equation of y\u2033\u2032 - 6y	\u2033 + 11y\u2032 - 6y = 0",
		responses: [
					"y = e^-x",
					"y = e^4x",
					"y = e^-3x",
					"y = e^3x"
					],
		correct: "y = e^3x",
		category: "Miscellaneous Calculus Problems",
		value: 300
	},
	{
		question: "What is the x-coordinate of the absolute maximum of f(x) = 8x\xB3 + 81x\xB2 -42x -8 on [-8, 2]",
		responses: [
					"x = 1/4",
					"x = 1",
					"x = -7",
					"x = -1/4"
					],
		correct: "x = -7",
		category: "Miscellaneous Calculus Problems",
		value: 400
	},

];
