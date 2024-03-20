import styled from 'styled-components';

import { Column } from '../ui/Column';
import { FaCopyright } from 'react-icons/fa';
import Button from '../ui/Button';
import { Row } from '../ui/Row';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AboutLayout = styled.div`
	padding: 5vw;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	height: 100vh;
	overflow-y: scroll;
`;

const Title = styled.h1`
	color: var(--color-text-main);
	font-size: 4rem;
`;

const Highlight = styled.p`
	color: var(--color-el-main);
`;

const SubTitle = styled.h3`
	color: var(--color-text-main);
	font-size: 2.4rem;
`;

const P = styled.p`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.4rem;
	line-height: 1.4;
	color: var(--color-text-sec);
	max-width: 50rem;
	text-align: justify;
`;

const Contacts = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	row-gap: 1rem;
`;

const ContactInfo = styled.p`
	font-size: 1.4rem;
	line-height: 1.4;
	color: var(--color-el-main);
`;

const Form = styled.form`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 90%;
	height: 40rem;
	overflow-y: scroll;
	padding: 2rem;
	border-radius: 1rem;
	background-color: var(--color-bg-sec);

	& > * {
		border-bottom: 1px solid var(--color-text-btn);
		padding: 3rem;
	}

	& > :last-child {
		border-bottom: none;
		padding-top: 3rem;
		& > button {
			padding: 1rem 2rem;
			background-color: var(--color-el-main);
			color: var(--color-text-btn);
			transition: opacity 300ms;

			&:hover {
				opacity: 0.7;
			}
		}
	}

	& > :nth-child(2) {
		& > :nth-child(2) {
			& > * {
				& > input {
					width: 30rem;
				}
			}
		}
	}
`;

const Input = styled.input`
	padding: 1rem;
	border: none;
	border-radius: 0.5rem;
	background-color: var(--color-input);
	color: var(--color-text-main);

	&:focus {
		border: none;
		outline: 1px solid var(--color-el-light-main);
	}
`;

const TextArea = styled.textarea`
	width: 50%;
	height: 10rem;
	resize: none;
	padding: 1rem;
	border: none;
	border-radius: 0.5rem;
	background-color: var(--color-input);
	color: var(--color-text-main);

	&:focus {
		outline: 1px solid var(--color-el-light-sec);
	}
`;

const Label = styled.label`
	font-size: 1.5rem;
	font-weight: 500;
	color: var(--color-text-btn);
`;

const Select = styled.select`
	background-color: var(--color-input);
	padding: 1rem;
	border-radius: 0.5rem;
	color: var(--color-text-main);

	&:focus {
		outline: 1px solid var(--color-el-light-sec);
	}
`;

const Option = styled.option`
	font-size: 1.4rem;
	padding: 1rem;
`;

function About() {
	const [showQuestionForm, setShowQuestionForm] = useState(false);

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	function onSubmit(data) {
		console.log(data);
	}

	return (
		<AboutLayout>
			{showQuestionForm && (
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Row gap="2rem" justify="space-between" wrap="wrap">
						<Label for="question">Question</Label>
						<TextArea
							type="text"
							{...register('question', {
								validate: value => {
									const pattern = /.*\?$/gim;

									if (!pattern.test(value))
										return 'Please include a question mark(?)!';

									return true;
								},
							})}
						/>
						{errors?.question?.message}
					</Row>

					<Row gap="2rem" justify="space-between" wrap="wrap">
						<Label for="question">Answers</Label>

						<Column gap="1rem">
							<Row gap="2rem" justify="space-between" wrap="wrap">
								<Label for="question">A</Label>
								<Input type="text" {...register('Answer-A')} />
							</Row>
							<Row gap="2rem" justify="space-between" wrap="wrap">
								<Label for="question">B</Label>
								<Input type="text" {...register('Answer-B')} />
							</Row>
							<Row gap="2rem" justify="space-between" wrap="wrap">
								<Label for="question">C</Label>
								<Input type="text" {...register('Answer-C')} />
							</Row>
							<Row gap="2rem" justify="space-between" wrap="wrap">
								<Label for="question">D</Label>
								<Input type="text" {...register('Answer-D')} />
							</Row>
							<Row gap="2rem" justify="space-between" wrap="wrap">
								<Label for="question">E</Label>
								<Input type="text" {...register('Answer-E')} />
							</Row>
						</Column>
					</Row>

					<Row gap="2rem" justify="space-between" wrap="wrap">
						<Label for="question">Hint (optional)</Label>
						<TextArea {...register('hint')} />
					</Row>

					<Row gap="2rem" justify="space-between" wrap="wrap">
						<Label for="question">Category</Label>
						<Select {...register('category')}>
							<Option>Front-End</Option>
							<Option>Back-End</Option>
							<Option>Database</Option>
						</Select>
					</Row>

					<Row gap="2rem" justify="space-between" wrap="wrap">
						<Label for="question">DifficultyLevel</Label>
						<Select {...register('difficultyLevel')}>
							<Option>Easy</Option>
							<Option>Normal</Option>
							<Option>Hard</Option>
							<Option>Guru</Option>
							<Option>Master</Option>
						</Select>
					</Row>

					<Row gap="1rem">
						<Button onClick={() => setShowQuestionForm(false)}>
							Cancel
						</Button>
						<Button
						//  onClick={() => setShowQuestionForm(false)}
						>
							Submit
						</Button>
					</Row>
				</Form>
			)}

			<Title>
				About <Highlight>The Developer Quiz</Highlight>
			</Title>

			<P>
				This web applications was a learning project that I built.
				Inspired by the Front-End mentors quiz application challenge. I
				used React.js for the front-end and Supabase for the back-end.
			</P>

			<Column gap="1rem">
				<SubTitle>Want to help?</SubTitle>

				<P>
					If there are any questions you would like to be included in
					The Developer Quiz, feel free to provide the questions by
					Clicking the button below!
				</P>
				<Button onClick={() => setShowQuestionForm(true)}>
					Add a question
				</Button>
			</Column>

			<Column gap="1rem">
				<SubTitle>My contacts</SubTitle>

				<Contacts>
					<P>Email</P>
					<ContactInfo>paiwastmain@gmail.com</ContactInfo>
					<P>Phone</P>
					<ContactInfo>+964 0776 147 2433</ContactInfo>
				</Contacts>
			</Column>

			<P>
				<FaCopyright /> Paiwast A. Wahid, 2024
			</P>
		</AboutLayout>
	);
}

export default About;
