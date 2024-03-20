import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logOut as logOutApi } from '../../api/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogOut() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate: logOut, isLoading } = useMutation({
		mutationFn: logOutApi,
		onSuccess: () => {
			navigate('/login', { replace: true });
			queryClient.removeQueries();
		},
	});

	return { logOut, isLoading };
}
