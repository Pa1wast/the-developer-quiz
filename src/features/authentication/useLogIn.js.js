import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logIn as logInApi } from '../../api/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function useLogIn() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutate: logIn, isLoading } = useMutation({
		mutationFn: ({ email, password }) => logInApi(email, password),
		onSuccess: user => {
			queryClient.setQueriesData(['user'], user);

			navigate('/', { replace: true });
		},
		onError: err => {
			toast.error('Email or password is incorrect');
			console.log('ERROR', err);
		},
	});

	return { logIn, isLoading };
}

export default useLogIn;
