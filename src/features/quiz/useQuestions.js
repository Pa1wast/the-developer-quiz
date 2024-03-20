import { useQuery } from '@tanstack/react-query';
import { getQuestions } from '../../api/apiQuestions';

export function useQuestions(categoryId, limit, difficultyLevel) {
	const {
		isLoading,
		data: questions,
		error,
	} = useQuery({
		queryFn: () => getQuestions(categoryId, limit, difficultyLevel),
		queryKey: ['questions'],
	});

	return { isLoading, questions, error };
}
