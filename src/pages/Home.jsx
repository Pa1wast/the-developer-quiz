import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Heading } from '../ui/Heading';
import Button from '../ui/Button';
import { Column } from '../ui/Column';
import { DiDatabase } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCategories } from '../features/quiz/useCategories';
import { useQuiz } from '../contexts/QuizProvider';
import '../helpers/shuffleQuestions';

const StyledHome = styled.div`
	width: 100%;
	display: grid;
	place-items: center;
	gap: 5rem;
	margin-top: 3rem;

	& > div {
		width: 75%;
		@media screen and (min-width: 700px) {
			width: 50%;
		}
	}
`;

const Span = styled.span`
	font-weight: 600;
	display: block;
	text-transform: uppercase;
	color: var(--color-text-main);
`;

const P = styled.span`
	font-weight: 400;
	font-size: 1.6rem;
	display: block;
	margin-top: 1rem;
	color: var(--color-text-sec);

	transform: translateX(150%);
	opacity: 0.1;
	transition: all 400ms ease-in-out;

	${props =>
		props.display === 'visible' && 'transform: translateX(0); opacity: 1; '}
`;

const H3 = styled.h3`
	font-size: 2rem;
	font-weight: 600;
	text-align: center;
	color: var(--color-text-sec);
	text-transform: capitalize;

	transform: translateX(-150%);
	opacity: 0.1;
	transition: all 400ms ease-in-out;

	${props =>
		props.display === 'visible' && 'transform: translateX(0); opacity: 1; '}
`;

const List = styled.div`
	width: 100%;
	gap: 0.5rem;
	display: grid;

	& > button {
		padding: 1rem;
		opacity: 0.1;
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 1.6px;
		transition: all 300ms;

		&:hover {
			transform: scale(1.04);
		}

		& > img {
			width: 2rem;
		}
	}

	& > :nth-child(1),
	& > :nth-child(3) {
		transform: translateX(-100%);

		${props =>
			props.display === 'visible' &&
			'transform: translateX(0); opacity: 1; '}
	}

	& > :nth-child(2),
	& > :nth-child(4) {
		transform: translateX(100%);

		${props =>
			props.display === 'visible' &&
			'transform: translateX(0); opacity: 1; '}
	}
`;

function Home() {
	const [display, setDisplay] = useState('hidden');

	useEffect(() => {
		setDisplay('visible');
	}, []);

	const navigate = useNavigate();
	const { isLoading, categories } = useCategories();
	const { category, onSelectCategory } = useQuiz();

	if (isLoading) return 'Loading...';

	function handleClick(id) {
		onSelectCategory(id);
		navigate('quizoptions');
	}

	return (
		<StyledHome>
			<Column gap="1rem" align="center">
				<Heading display={display}>
					Welcome to<Span>the Developer Quiz</Span>
				</Heading>
				<P display={display}>
					Let&lsquo;s test your developer knowledge!
				</P>
			</Column>

			<Column gap="2rem" align="center">
				<H3 display={display}>Choose a category to start</H3>

				<List display={display}>
					{/* <Button onClick={handleClick}>
						Front End <FaHtml5 />
					</Button>
					<Button onClick={handleClick}>
						Back End <FaNodeJs />
					</Button>
					<Button>
						Database <DiDatabase />
					</Button> */}

					{categories?.map(category => (
						<Button
							key={category.id}
							onClick={() => handleClick(category.id)}
						>
							{category.name} <img src={category.icon} />
						</Button>
					))}

					<Button onClick={() => handleClick('all')}>
						All <FaHtml5 /> <FaNodeJs /> <DiDatabase />
					</Button>
				</List>
			</Column>
		</StyledHome>
	);
}

export default Home;
