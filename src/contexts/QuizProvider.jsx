import { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext();

const initialState = {
	categoryId: null,
	currentQuestionIndex: 0,
	difficultyLevel: '',
	numQuestions: 5,
	isHints: false,
	isTimer: false,
	selectedAnswers: [],
	selectedAnswer: {},
	correctAnswers: 0,
	quizProgress: 0,
	quizEnded: false,
	isSubmitted: false,
	hintsLeft: 0,
	isAnswerSelected: false,
	isTimeout: false,
	timeLimit: 0,
	timeSpent: 0,
};

function reducer(state, { type, payload }) {
	switch (type) {
		case 'home/selectCategory':
			return {
				...state,
				categoryId: payload,
			};

		case 'quizOptions/selectDifficulty':
			return { ...state, difficultyLevel: payload };

		case 'quizOptions/selectNumQuestions':
			return { ...state, numQuestions: payload };

		case 'quizOptions/toggleHints':
			return {
				...state,
				isHints: state.isHints === false ? true : false,
				hintsLeft: 3,
			};

		case 'quizOptions/toggleTimer':
			return {
				...state,
				isTimer: state.isTimer === false ? true : false,
				timeLimit: state.numQuestions * 30,
			};

		case 'quiz/selectAnswer':
			return {
				...state,
				selectedAnswer: payload,
				isAnswerSelected: true,
			};

		case 'quiz/submitAnswer':
			return {
				...state,
				isSubmitted: true,
				correctAnswers: state.selectedAnswer.isCorrect
					? state.correctAnswers++
					: state.correctAnswers,
				selectedAnswers: [state.selectedAnswers, state.selectedAnswer],
				quizProgress: state.quizProgress + 100 / state.numQuestions,
			};

		case 'quiz/nextQuestion':
			return {
				...state,
				isSubmitted: false,
				selectedAnswer: {},
				currentQuestion: state.currentQuestionIndex++,
				isAnswerSelected: false,
			};

		case 'quiz/endQuiz':
			return { ...state, quizEnded: true };

		case 'quiz/useHint':
			return { ...state, hintsLeft: state.hintsLeft - 1 };

		case 'quiz/clearQuiz':
			return initialState;

		case 'quiz/timeout':
			return { ...state, isTimeout: true };

		case 'quiz/updateTimeSpent':
			return {
				...state,
				timeSpent: payload,
			};

		default:
			throw new Error('Action type is unknown');
	}
}

function QuizProvider({ children }) {
	const [
		{
			categoryId,
			difficultyLevel,
			numQuestions,
			isHints,
			isTimer,
			selectedAnswer,
			quizProgress,
			currentQuestionIndex,
			isSubmitted,
			quizEnded,
			correctAnswers,
			hintsLeft,
			isAnswerSelected,
			isTimeout,
			timeLimit,
			timeSpent,
		},
		dispatch,
	] = useReducer(reducer, initialState);

	function handleSelectCategory(id) {
		dispatch({ type: 'home/selectCategory', payload: id });
	}

	function handleSelectDifficulty(difficultyLevel) {
		dispatch({
			type: 'quizOptions/selectDifficulty',
			payload: difficultyLevel,
		});
	}

	function handleSelectNumQuestions(numQuestions) {
		dispatch({
			type: 'quizOptions/selectNumQuestions',
			payload: Number(numQuestions),
		});
	}

	function handleToggleHints() {
		dispatch({ type: 'quizOptions/toggleHints' });
	}

	function handleToggleTimer() {
		dispatch({ type: 'quizOptions/toggleTimer' });
	}

	function handleSelectAnswer(answer) {
		dispatch({ type: 'quiz/selectAnswer', payload: answer });
	}

	function handleSubmitAnswer() {
		dispatch({ type: 'quiz/submitAnswer' });
	}

	function handleNextQuestion() {
		dispatch({ type: 'quiz/nextQuestion' });
	}

	function handleEndQuiz() {
		dispatch({ type: 'quiz/endQuiz' });
	}
	function handleClearQuiz() {
		dispatch({ type: 'quiz/clearQuiz' });
	}

	function handleUseHint() {
		dispatch({ type: 'quiz/useHint' });
	}
	function handleTimeout() {
		dispatch({ type: 'quiz/timeout' });
	}

	function handleUpdateTimeSpent(timeSpent) {
		dispatch({ type: 'quiz/updateTimeSpent', payload: timeSpent });
	}

	return (
		<QuizContext.Provider
			value={{
				categoryId,
				difficultyLevel,
				numQuestions,
				isHints,
				isTimer,
				selectedAnswer,
				quizProgress,
				currentQuestionIndex,
				isSubmitted,
				correctAnswers,
				quizEnded,
				hintsLeft,
				isAnswerSelected,
				isTimeout,
				timeLimit,
				timeSpent,
				onSelectCategory: handleSelectCategory,
				onSelectDifficulty: handleSelectDifficulty,
				onSelectNumQuestions: handleSelectNumQuestions,
				onToggleHints: handleToggleHints,
				onToggleTimer: handleToggleTimer,
				onSelectAnswer: handleSelectAnswer,
				onSubmitAnswer: handleSubmitAnswer,
				onNextQuestion: handleNextQuestion,
				onEndQuiz: handleEndQuiz,
				onClearQuiz: handleClearQuiz,
				onUseHint: handleUseHint,
				onTimeout: handleTimeout,
				onUpdateTimeSpent: handleUpdateTimeSpent,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}

function useQuiz() {
	const context = useContext(QuizContext);

	if (context === undefined)
		throw new Error('QuizContext was used outside of QuizProvider');

	return context;
}

export { useQuiz, QuizProvider };
