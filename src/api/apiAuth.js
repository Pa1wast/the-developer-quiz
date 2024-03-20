import toast from 'react-hot-toast';
import supabase from './supabase';

export async function singUp(email, password, firstName, lastName, username) {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				firstName,
				lastName,
				username,
				profilePicture: '',
			},
		},
	});

	return { data, error };
}

export async function logIn(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	return { data, error };
}

export async function getCurrentUser() {
	const { data: session } = await supabase.auth.getSession();

	if (!session.session) return null;

	const { data, error } = await supabase.auth.getUser();

	if (error) console.log(error.message);

	return data.user;
}

export async function logOut() {
	const { error } = await supabase.auth.signOut();
	if (error) console.log(error);
}

export async function updateUser({
	firstName,
	lastName,
	email,
	password,
	username,
	profilePicture,
}) {
	let updatedUser = { data: {} };

	if (email) updatedUser.email = email;
	if (password) updatedUser.password = password;
	if (username) updatedUser.username = username;
	if (firstName) updatedUser.firstName = firstName;
	if (lastName) updatedUser.lastName = lastName;
	if (profilePicture) updatedUser.data.profilePicture = profilePicture;

	console.log(updatedUser);

	// const { data, error } = await supabase.auth.updateUser(updatedUser);
}
