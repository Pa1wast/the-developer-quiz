import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyles from './styles/GlobalStyles.js';

import { DarkModeProvider } from './contexts/DarkModeProvider.jsx';
import { NavbarProvider } from './contexts/NavbarProvider.jsx';
import { QuizProvider } from './contexts/QuizProvider.jsx';

import ProtectedRoute from './ui/ProtectedRoute.jsx';
import AppLayout from './ui/AppLayout.jsx';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Settings from './pages/Settings.jsx';
import LogIn from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';
import QuizOptions from './pages/QuizOptions.jsx';
import LeaderBoard from './pages/LeaderBoard.jsx';
import DisplaySettings from './features/settings/DisplaySettings.jsx';
import SoundSettings from './features/settings/SoundSettings.jsx';
import AccountSettings from './features/settings/AccountSettings.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import About from './pages/About.jsx';
import { SettingsProvider } from './contexts/SettingsContext.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<AppLayout />
			</ProtectedRoute>
		),
		children: [
			{ index: true, element: <Home /> },

			{
				path: 'quizoptions',
				element: <QuizOptions />,
			},
			{
				path: 'quiz',
				element: <Quiz />,
			},

			{
				path: 'settings',
				element: <Settings />,
				children: [
					{
						path: 'display',
						element: <DisplaySettings />,
					},
					{ path: 'account', element: <AccountSettings /> },
					{ path: 'sound', element: <SoundSettings /> },
				],
			},
			{
				path: 'leaderboard',
				element: <LeaderBoard />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: '*',
				element: <p>no page found</p>,
			},
		],
	},
	{
		path: 'results',
		element: <Results />,
	},

	{
		path: 'login',
		element: <LogIn />,
	},
	{
		path: 'signup',
		element: <SignUp />,
	},

	{
		path: '*',
		element: <p>error</p>,
	},
]);

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<SettingsProvider>
				<QuizProvider>
					<DarkModeProvider>
						<NavbarProvider>
							<GlobalStyles />
							<RouterProvider router={router} />
						</NavbarProvider>
					</DarkModeProvider>
				</QuizProvider>
			</SettingsProvider>
			<ReactQueryDevtools initialIsOpen={false} />
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				toastOptions={{
					// Define default options
					duration: 5000,
					style: {
						background: 'var(--color-bg-sec)',
						color: 'var(--color-text-btn)',
						fontSize: '16px',
					},
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;
