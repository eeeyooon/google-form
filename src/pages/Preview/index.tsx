import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import PreviewCard from '../../components/PreviewCard';
import { TitleSectionWrapper } from '../../components/TitleSection/styles';

export default function Preview() {
	const cards = useSelector((state: RootState) => state.form.cards);
	const formData = useSelector((state: RootState) => state.form);
	const { formTitle, formDesc } = formData;

	return (
		<PreviewWrapper>
			<FormTitleSection>
				<FormTitle>{formTitle}</FormTitle>
				<FormDesc>{formDesc}</FormDesc>
				<FormInfo>*표시는 필수 질문임</FormInfo>
			</FormTitleSection>
			<form name="previewForm" id="previewForm">
				{cards.map((cardId) => (
					<PreviewCard key={cardId} cardId={cardId} />
				))}
			</form>
		</PreviewWrapper>
	);
}

const PreviewWrapper = styled.div`
	background-color: ${({ theme }) => theme.color.background};
	height: 100vh;
	width: 100%;
`;

const FormTitleSection = styled.div`
	width: 768px;
	height: 160px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.color.white};
	margin-top: 12px;
	border-top: 10px solid ${({ theme }) => theme.color.primary};
`;

const FormTitle = styled.h1`
	height: 65px;
	font-size: 32px;
	padding-top: 12px;

	&::placeholder {
		color: ${({ theme }) => theme.color.black};
	}
`;

const FormDesc = styled.div`
	height: 24px;
	font-size: 0.875rem;
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 8px;
`;

const FormInfo = styled.p`
	border-top: 1px solid ${({ theme }) => theme.color.lightgray};
	padding-top: 10px;
	font-size: 18px;
`;
