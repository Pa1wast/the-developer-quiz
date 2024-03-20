import { useState } from 'react';
import styled from 'styled-components';
import Toggle from '../../ui/Toggle';
import ToggleTheme from '../../ui/ToggleTheme';
import { Row } from '../../ui/Row';
import { useSettings } from '../../contexts/SettingsContext';

const DisplaySettingsLayout = styled.div`
	padding: 2vw 2vw 7rem 2vw;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	gap: 1px;

	@media screen and (max-width: 600px) {
		height: 90vh;
	}

	& > * {
		grid-column: 1/-1;
		width: 100%;
		background-color: var(--color-bg-sec);
		padding: 2rem;
		border-radius: 3px;
	}
`;

const P = styled.p`
	font-size: 1.2rem;
	font-weight: 500;
	justify-self: start;
	color: var(--color-text-btn);
`;

const Select = styled.select`
	background-color: var(--color-el-light-main);
	border-radius: 5px;
	font-size: 1.2rem;
	font-weight: 500;
	padding-block: 0.2rem;

	&:focus {
		outline: 2px solid var(--color-el-light-sec);
	}
`;

const Option = styled.option`
	font-size: 1.4rem;
`;

function DisplaySettings() {
	const [scoreType, setScoreType] = useState('percentage');

	const { dispatch } = useSettings();

	const scoreTypes = [
		{ type: 'percentage', example: '75%' },
		{ type: 'decimal', example: '0.75' },
		{ type: 'letter-grades', example: 'B+' },
	];

	function handleSelectScoreType(type) {
		setScoreType(type);
		dispatch({ type: 'display/selectScoreType', payload: type });
	}

	return (
		<DisplaySettingsLayout>
			<Row justify="space-between">
				<P>Theme</P>
				<ToggleTheme />
			</Row>

			<Row justify="space-between">
				<P>Score</P>
				{scoreTypes.map(el => {
					if (el.type === scoreType)
						return <P>e.g. - ( {el.example} )</P>;
				})}
				<Select onChange={e => handleSelectScoreType(e.target.value)}>
					<Option value="percentage">Percentage</Option>
					<Option value="decimal">Decimal</Option>
					<Option value="letter-grades">Letter grades</Option>
				</Select>
			</Row>

			<Row justify="space-between">
				<P>Show hints used</P>
				<Toggle
					onToggle={() =>
						dispatch({ type: 'display/toggleShowHintsUsed' })
					}
				/>
			</Row>

			<Row justify="space-between">
				<P>Show time spent</P>
				<Toggle
					onToggle={() =>
						dispatch({ type: 'display/toggleShowTimeSpent' })
					}
				/>
			</Row>

			<Row justify="space-between">
				<P>Show category score</P>
				<Toggle
					onToggle={() =>
						dispatch({ type: 'display/toggleShowCategoryScore' })
					}
				/>
			</Row>
		</DisplaySettingsLayout>
	);
}

export default DisplaySettings;
