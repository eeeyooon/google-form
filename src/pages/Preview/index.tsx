import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import PreviewCard from '../../components/PreviewCard';

export default function Preview() {
	const cards = useSelector((state: RootState) => state.form.cards);
	const formData = useSelector((state: RootState) => state.form);
	const { formTitle, formDesc } = formData;

	return (
		<PreviewWrapper>
			<h1>{formTitle}</h1>
			<p>{formDesc}</p>
			{cards.map((cardId) => (
				<PreviewCard key={cardId} cardId={cardId} />
			))}
		</PreviewWrapper>
	);
}

const PreviewWrapper = styled.div``;
