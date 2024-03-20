import supabase from './supabase';

const questions = [
	{
		questionText: 'What does HTML stand for?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{ answerText: 'Hypertext Markup Language', isCorrect: true },
			{ answerText: 'Hypertext Markdown Language', isCorrect: false },
			{
				answerText: 'Hyperlink and Text Markup Language',
				isCorrect: false,
			},
			{ answerText: 'Hyperlink Markup Language', isCorrect: false },
		],
	},
	{
		questionText: 'What is CSS primarily used for?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{ answerText: 'To style the web pages', isCorrect: true },
			{ answerText: 'To create animations', isCorrect: false },
			{
				answerText: 'To define the structure of the web pages',
				isCorrect: false,
			},
			{ answerText: 'To handle server-side logic', isCorrect: false },
		],
	},
	{
		questionText: 'What is the latest version of ECMAScript?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{ answerText: 'ES2022', isCorrect: true },
			{ answerText: 'ES6', isCorrect: false },
			{ answerText: 'ES10', isCorrect: false },
			{ answerText: 'ES8', isCorrect: false },
		],
	},
	{
		questionText: 'What does DOM stand for?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{ answerText: 'Document Object Model', isCorrect: true },
			{ answerText: 'Document Object Method', isCorrect: false },
			{ answerText: 'Dynamic Object Model', isCorrect: false },
			{ answerText: 'Document Object Mapping', isCorrect: false },
		],
	},
	{
		questionText: 'What is CSS Selector?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{
				answerText:
					'A method for selecting HTML elements based on their id, class, tag, attribute, and more',
				isCorrect: true,
			},
			{ answerText: 'A JavaScript function', isCorrect: false },
			{
				answerText: 'A server-side scripting language',
				isCorrect: false,
			},
			{ answerText: 'A way to style web pages', isCorrect: false },
		],
	},
	{
		questionText: 'What is the purpose of the <div> element in HTML?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{
				answerText:
					'To create sections or divisions in an HTML document',
				isCorrect: true,
			},
			{
				answerText: 'To insert images into an HTML document',
				isCorrect: false,
			},
			{
				answerText: 'To include external JavaScript files',
				isCorrect: false,
			},
			{
				answerText: 'To define hyperlinks in an HTML document',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is a CSS framework?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{
				answerText:
					'A collection of pre-written CSS rules that can be applied to speed up the development process',
				isCorrect: true,
			},
			{
				answerText: 'A method for writing JavaScript code',
				isCorrect: false,
			},
			{
				answerText: 'A set of images used for web design',
				isCorrect: false,
			},
			{
				answerText: 'A tool for analyzing website traffic',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What does "responsive design" refer to?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{
				answerText:
					'Designing web pages that automatically adjust to fit various screen sizes and devices',
				isCorrect: true,
			},
			{
				answerText:
					'Creating websites that only work on desktop computers',
				isCorrect: false,
			},
			{
				answerText:
					'Developing web pages that load quickly on slow internet connections',
				isCorrect: false,
			},
			{
				answerText:
					'Designing websites that are compatible with only one web browser',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is AJAX?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{
				answerText:
					'Asynchronous JavaScript and XML, used to send and receive data asynchronously without reloading the web page',
				isCorrect: true,
			},
			{
				answerText: 'A JavaScript library for creating animations',
				isCorrect: false,
			},
			{
				answerText: 'A method for creating static web pages',
				isCorrect: false,
			},
			{
				answerText: 'A programming language for building web servers',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is media query in CSS?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{
				answerText:
					'To apply different styles to a web page based on its dimensions and other properties',
				isCorrect: true,
			},
			{
				answerText:
					'To embed multimedia content, such as videos and audio files, into a web page',
				isCorrect: false,
			},
			{
				answerText:
					'To interact with the user by displaying pop-up messages and dialog boxes',
				isCorrect: false,
			},
			{
				answerText: 'To create responsive forms for user input',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is a Promise in JavaScript?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{
				answerText:
					'A method for managing asynchronous code execution in JavaScript',
				isCorrect: true,
			},
			{
				answerText:
					'A type of function that is called immediately after it is defined',
				isCorrect: false,
			},
			{
				answerText:
					'A technique for encapsulating code into reusable components',
				isCorrect: false,
			},
			{
				answerText:
					'A way to organize code into modules for better maintainability',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What does the DOM represent in web development?',
		difficultyLevel: 'easy',
		categoryId: 1,
		answers: [
			{
				answerText:
					'The model representation of the document, which can be manipulated and accessed using JavaScript',
				isCorrect: true,
			},
			{
				answerText:
					'The style definition of the document, which determines its visual appearance',
				isCorrect: false,
			},
			{
				answerText:
					'The mechanism for loading external resources, such as images and scripts, into the document',
				isCorrect: false,
			},
			{
				answerText:
					'The collection of functions and methods provided by the browser for interacting with the document',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is a web server?',
		difficultyLevel: 'easy',
		categoryId: 2,
		answers: [
			{
				answerText:
					'A server that delivers web pages, files, or other content to clients over the internet',
				isCorrect: true,
			},
			{
				answerText:
					'A database management system for storing and retrieving data',
				isCorrect: false,
			},
			{
				answerText:
					'A programming language used for creating dynamic web pages',
				isCorrect: false,
			},
			{
				answerText: 'A software application for managing web servers',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is an API?',
		difficultyLevel: 'easy',
		categoryId: 2,
		answers: [
			{
				answerText:
					'Application Programming Interface, a set of rules and protocols for building and interacting with software applications',
				isCorrect: true,
			},
			{
				answerText:
					'Automated Program Installation, a process for installing software without user intervention',
				isCorrect: false,
			},
			{
				answerText:
					'Advanced Programming Interface, a collection of advanced functions and features in a programming language',
				isCorrect: false,
			},
			{
				answerText:
					'All Purpose Instruction, a generic instruction used in programming languages',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is the difference between PUT and POST requests?',
		difficultyLevel: 'easy',
		categoryId: 2,
		answers: [
			{
				answerText:
					'PUT is used to update an existing resource, while POST is used to create a new resource',
				isCorrect: true,
			},
			{
				answerText:
					'PUT is used for sending data to the server, while POST is used for receiving data from the server',
				isCorrect: false,
			},
			{
				answerText:
					'PUT is more secure than POST for transmitting sensitive information',
				isCorrect: false,
			},
			{
				answerText:
					'PUT has a higher priority than POST in HTTP requests',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is a SELECT statement in SQL?',
		difficultyLevel: 'easy',
		categoryId: 2,
		answers: [
			{
				answerText: 'A request to retrieve data from a database',
				isCorrect: true,
			},
			{
				answerText: 'A command to update records in a database',
				isCorrect: false,
			},
			{
				answerText: 'A statement to create a new table in a database',
				isCorrect: false,
			},
			{
				answerText: 'A query to delete records from a database',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is RESTful architecture?',
		difficultyLevel: 'easy',
		categoryId: 2,
		answers: [
			{
				answerText:
					'A style of designing networked applications where resources are represented as unique URLs',
				isCorrect: true,
			},
			{
				answerText:
					'A set of programming guidelines for writing efficient code',
				isCorrect: false,
			},
			{
				answerText: 'A framework for building responsive web pages',
				isCorrect: false,
			},
			{
				answerText:
					'A method for testing web applications across multiple browsers',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What are middleware functions in Express.js?',
		difficultyLevel: 'easy',
		categoryId: 2,
		answers: [
			{
				answerText:
					'Middleware functions are functions that have access to the request and response objects and can modify them before sending them to the next middleware function',
				isCorrect: true,
			},
			{
				answerText:
					'Middleware refers to software that connects different software applications',
				isCorrect: false,
			},
			{
				answerText:
					'Middleware is used to define the structure of a web application',
				isCorrect: false,
			},
			{
				answerText:
					'Middleware is a type of database management system',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is a session storage?',
		difficultyLevel: 'easy',
		categoryId: 2,
		answers: [
			{
				answerText:
					'A temporary storage mechanism for storing user-specific information during a browsing session',
				isCorrect: true,
			},
			{
				answerText:
					'A secure way of transferring data between a client and a server',
				isCorrect: false,
			},
			{
				answerText:
					'A method for compressing files before sending them over the internet',
				isCorrect: false,
			},
			{
				answerText:
					'A technique for optimizing web pages for search engines',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What does MVC stand for in software development?',
		difficultyLevel: 'easy',
		categoryId: 2,
		answers: [
			{
				answerText:
					'Model-View-Controller, an architectural pattern for designing software applications',
				isCorrect: true,
			},
			{
				answerText:
					'Multiple Virtual Containers, a method for virtualizing server resources',
				isCorrect: false,
			},
			{
				answerText:
					'Modern Visual Components, a set of user interface elements for web development',
				isCorrect: false,
			},
			{
				answerText:
					'Mobile Voice Communication, a technology for mobile phone networks',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is a database?',
		difficultyLevel: 'easy',
		categoryId: 3,
		answers: [
			{
				answerText:
					'A database is a collection of structured data that is stored and organized in a way that allows for efficient retrieval, updating, and management',
				isCorrect: true,
			},
			{
				answerText:
					'A database is a software application for managing web servers',
				isCorrect: false,
			},
			{
				answerText:
					'A database is a programming language used for creating dynamic web pages',
				isCorrect: false,
			},
			{
				answerText:
					'A database is a server that delivers web pages to clients over the internet',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What does SQL stand for?',
		difficultyLevel: 'easy',
		categoryId: 3,
		answers: [
			{
				answerText:
					'Structured Query Language, a domain-specific language used for managing and manipulating data in relational databases',
				isCorrect: true,
			},
			{
				answerText:
					'Standard Query Language, a language for querying web services',
				isCorrect: false,
			},
			{
				answerText:
					'System Query Language, a method for querying system resources',
				isCorrect: false,
			},
			{
				answerText:
					'Simple Query Language, a lightweight language for querying databases',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is database normalization?',
		difficultyLevel: 'easy',
		categoryId: 3,
		answers: [
			{
				answerText:
					'Normalization is the process of organizing the fields and tables of a relational database to minimize redundancy and dependency',
				isCorrect: true,
			},
			{
				answerText:
					'Normalization is the process of converting data into a standard format for better compatibility',
				isCorrect: false,
			},
			{
				answerText:
					'Normalization is the process of creating new records in a database',
				isCorrect: false,
			},
			{
				answerText:
					'Normalization is the process of securing a database against unauthorized access',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is a primary key in a database?',
		difficultyLevel: 'easy',
		categoryId: 3,
		answers: [
			{
				answerText:
					'A primary key is a unique identifier for a record in a database table',
				isCorrect: true,
			},
			{
				answerText:
					'A primary key is a field that stores numerical data',
				isCorrect: false,
			},
			{
				answerText: 'A primary key is a field that stores text data',
				isCorrect: false,
			},
			{
				answerText:
					'A primary key is a field that links two database tables together',
				isCorrect: false,
			},
		],
	},

	{
		questionText: 'What is the purpose of a media query in CSS?',
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{
				answerText: 'To specify the font size of text content',
				isCorrect: false,
			},
			{
				answerText: 'To define the structure of a web page',
				isCorrect: false,
			},
			{
				answerText: 'To create animations and transitions',
				isCorrect: false,
			},
			{
				answerText:
					'To apply different styles based on the characteristics of the device displaying the page',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'What does CSS stand for?',
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{
				answerText:
					'Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in markup language like HTML',
				isCorrect: true,
			},
			{
				answerText:
					'Computer Style Sheets, a style sheet language used for describing the layout of documents written in markup language like HTML',
				isCorrect: false,
			},
			{
				answerText:
					'Creative Style Sheets, a style sheet language used for creating artistic designs for web pages',
				isCorrect: false,
			},
			{
				answerText:
					'Colorful Style Sheets, a style sheet language used for adding vibrant colors to web pages',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is the purpose of a media query in CSS?',
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{
				answerText: 'To specify the font size of text content',
				isCorrect: false,
			},
			{
				answerText: 'To define the structure of a web page',
				isCorrect: false,
			},
			{
				answerText: 'To create animations and transitions',
				isCorrect: false,
			},
			{
				answerText:
					'To apply different styles based on the characteristics of the device displaying the page',
				isCorrect: true,
			},
		],
	},
	{
		questionText:
			'Which of the following is NOT a valid JavaScript data type?',
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{ answerText: 'String', isCorrect: false },
			{ answerText: 'Number', isCorrect: false },
			{ answerText: 'Boolean', isCorrect: false },
			{ answerText: 'Array', isCorrect: false },
			{ answerText: 'Object', isCorrect: true },
		],
	},
	{
		questionText: "What does the term 'DOM' stand for in web development?",
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{ answerText: 'Document Object Method', isCorrect: false },
			{ answerText: 'Document Object Mapping', isCorrect: false },
			{ answerText: 'Dynamic Object Model', isCorrect: false },
			{ answerText: 'Document Object Model', isCorrect: true },
		],
	},

	{
		questionText: "What does the term 'DOM' stand for in web development?",
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{ answerText: 'Document Object Method', isCorrect: false },
			{ answerText: 'Document Object Mapping', isCorrect: false },
			{ answerText: 'Dynamic Object Model', isCorrect: false },
			{ answerText: 'Document Object Model', isCorrect: true },
		],
	},

	{
		questionText: 'What does CSS stand for?',
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{
				answerText:
					'Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in markup language like HTML',
				isCorrect: true,
			},
			{
				answerText:
					'Computer Style Sheets, a style sheet language used for describing the layout of documents written in markup language like HTML',
				isCorrect: false,
			},
			{
				answerText:
					'Creative Style Sheets, a style sheet language used for creating artistic designs for web pages',
				isCorrect: false,
			},
			{
				answerText:
					'Colorful Style Sheets, a style sheet language used for adding vibrant colors to web pages',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What does CSS stand for?',
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{
				answerText:
					'Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in markup language like HTML',
				isCorrect: true,
			},
			{
				answerText:
					'Computer Style Sheets, a style sheet language used for describing the layout of documents written in markup language like HTML',
				isCorrect: false,
			},
			{
				answerText:
					'Creative Style Sheets, a style sheet language used for creating artistic designs for web pages',
				isCorrect: false,
			},
			{
				answerText:
					'Colorful Style Sheets, a style sheet language used for adding vibrant colors to web pages',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What is the purpose of a media query in CSS?',
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{
				answerText: 'To specify the font size of text content',
				isCorrect: false,
			},
			{
				answerText: 'To define the structure of a web page',
				isCorrect: false,
			},
			{
				answerText: 'To create animations and transitions',
				isCorrect: false,
			},
			{
				answerText:
					'To apply different styles based on the characteristics of the device displaying the page',
				isCorrect: true,
			},
		],
	},
	{
		questionText:
			'Which of the following is NOT a valid JavaScript data type?',
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{ answerText: 'String', isCorrect: false },
			{ answerText: 'Number', isCorrect: false },
			{ answerText: 'Boolean', isCorrect: false },
			{ answerText: 'Array', isCorrect: false },
			{ answerText: 'Object', isCorrect: true },
		],
	},
	{
		questionText: "What does the term 'DOM' stand for in web development?",
		difficultyLevel: 'normal',
		categoryId: 1,
		answers: [
			{ answerText: 'Document Object Method', isCorrect: false },
			{ answerText: 'Document Object Mapping', isCorrect: false },
			{ answerText: 'Dynamic Object Model', isCorrect: false },
			{ answerText: 'Document Object Model', isCorrect: true },
		],
	},
];

const hints = [
	{
		questionId: 1,
		hintText: 'Consider the meaning of each letter in the acronym HTML.',
	},
	{
		questionId: 2,
		hintText: 'Think about the primary purpose of CSS in web development.',
	},
	{
		questionId: 3,
		hintText: 'Research the latest standards and versions of ECMAScript.',
	},
	{
		questionId: 4,
		hintText:
			'Explore the acronym DOM and its significance in web development.',
	},
	{
		questionId: 5,
		hintText:
			'Consider how CSS selectors target specific elements on a webpage.',
	},
	{
		questionId: 6,
		hintText:
			'Think about the purpose of the <div> element in structuring HTML documents.',
	},
	{
		questionId: 7,
		hintText: 'Research the concept of CSS frameworks and their benefits.',
	},
	{
		questionId: 8,
		hintText:
			'Consider how responsive design adapts to different screen sizes.',
	},
	{
		questionId: 9,
		hintText:
			'Explore the concept of AJAX and its role in web development.',
	},
	{
		questionId: 10,
		hintText:
			'Consider the purpose of media queries in CSS and their usage.',
	},
	{
		questionId: 11,
		hintText:
			'Explore the concept of Promises and their usage in asynchronous JavaScript.',
	},
	{
		questionId: 12,
		hintText:
			'Think about how the DOM represents the structure of an HTML document.',
	},
	{
		questionId: 13,
		hintText:
			'Consider the role of a web server in delivering content over the internet.',
	},
	{
		questionId: 14,
		hintText:
			'Research the meaning and usage of APIs in software development.',
	},
	{
		questionId: 15,
		hintText:
			'Compare and contrast the differences between PUT and POST requests.',
	},
	{
		questionId: 16,
		hintText: 'Explore the purpose of SELECT statements in SQL queries.',
	},
	{
		questionId: 17,
		hintText:
			'Research the principles and concepts of RESTful architecture.',
	},
	{
		questionId: 18,
		hintText:
			'Consider the role of middleware functions in Express.js applications.',
	},
	{
		questionId: 19,
		hintText:
			'Explore the purpose of session storage and its usage in web applications.',
	},
	{
		questionId: 20,
		hintText: 'Research the MVC architectural pattern and its components.',
	},
	{
		questionId: 21,
		hintText:
			'Consider the definition and purpose of a database in software development.',
	},
	{
		questionId: 22,
		hintText:
			'Research the meaning and usage of SQL in database management.',
	},
	{
		questionId: 23,
		hintText:
			'Explore the concept of database normalization and its benefits.',
	},
	{
		questionId: 24,
		hintText:
			'Consider the definition and purpose of a primary key in database tables.',
	},
];

export async function uploadQuestion() {
	const questions = await getAllQuestionsFromDb();

	for (let i = 0; i < questions.length; i++) {
		const questionId = questions[i].id;

		const { error: answersError } = await supabase
			.from('answers')
			.delete()
			.eq('questionId', questionId);

		if (answersError) {
			console.error(
				`Error deleting answers for question ${questionId}: ${answersError.message}`
			);
			continue;
		}

		const { error: questionError } = await supabase
			.from('questions')
			.delete()
			.eq('id', questionId);

		if (questionError) {
			console.error(
				`Error deleting question ${questionId}: ${questionError.message}`
			);
			continue;
		}
	}

	console.log('All questions and associated answers and hints were deleted');

	const toBeInsertedQuestions = getQuestions();

	const { data: insertedQuestions, error: insertingQuestionsError } =
		await supabase.from('questions').insert(toBeInsertedQuestions).select();

	if (insertingQuestionsError) console.log(insertingQuestionsError);
	else console.log(`${insertedQuestions.length} questions were inserted`);

	const toBeInsertedAnswers = getAnswers();

	const { data: insertedAnswers, error: insertingAnswersError } =
		await supabase.from('answers').insert(toBeInsertedAnswers).select();

	if (insertingAnswersError) console.log(insertingAnswersError);
	else console.log(` ${insertedAnswers.length} answers were inserted`);

	const { data: insertedHints, error: hintsError } = await supabase
		.from('hints')
		.insert(hints)
		.select();

	if (hintsError) console.log(hintsError);
	else console.log(`${insertedHints.length} hints were inserted`);
}

async function getAllQuestionsFromDb() {
	const { data: questions, error } = await supabase
		.from('questions')
		.select('*');

	if (error) {
		console.error(`Error fetching questions: ${error.message}`);
		return [];
	}

	return questions;
}

function addIdToQuestions() {
	const questionsWithId = questions.map((question, index) => {
		const questionObj = { ...question, id: index + 1 };

		return questionObj;
	});

	return questionsWithId;
}

function getQuestions() {
	const questions = addIdToQuestions();
	const questionsWithoutAnswers = questions.map(question => {
		delete question.answers;
		return question;
	});

	return questionsWithoutAnswers;
}

function getAnswers() {
	const questions = addIdToQuestions();

	let answers = [];

	for (const question of questions) {
		const questionAnswers = question.answers;
		const answersWithQuestionId = questionAnswers.map(questionAnswer => {
			return {
				...questionAnswer,
				questionId: question.id,
			};
		});
		answersWithQuestionId.forEach(answer => answers.push(answer));
	}

	return answers;
}
