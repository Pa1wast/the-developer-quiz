import styled from 'styled-components';
import { uploadQuestion } from '../api/uploadQuestions';

const Upload = styled.button`
	position: absolute;

	z-index: 1000;
	bottom: 0;
	padding: 1rem 0.5rem;
	background-color: #f7ec14;
	border: 2px solid #080000;
	border-left: none;
	border-radius: 0 1rem 1rem 0;
	font-size: 1rem;
	font-weight: 700;
	word-break: break-all;
	text-transform: uppercase;
	line-height: 1.5;
	margin-bottom: 1rem;
	transition: all 200ms;

	&:hover {
		transform: scale(1.04);
	}

	&:active {
		transform: scale(0.95) translateX(-3%);
	}
`;

function Uploader() {
	async function handleUploadQuestions() {
		await uploadQuestion();
	}

	return <Upload onClick={handleUploadQuestions}>upload questions</Upload>;
}

export default Uploader;
