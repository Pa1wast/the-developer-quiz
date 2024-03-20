import { useQuery } from '@tanstack/react-query';
import { getAnswers } from '../../api/aspiAnswers';

export function useAnswers(questionId) {
	// if (!questionId) throw new Error('useAnswers hook needs a question ID!!!');

	const {
		isLoading,
		data: answers,
		error,
	} = useQuery({
		queryFn: ()=> getAnswers(questionId),
		queryKey: ['answers'],
	});

	return { answers, isLoading, error };
}
