import styled from 'styled-components';
import TitleSection from '../../components/TitleSection';

export default function Form() {
	return (
		<FormWrapper>
			<TitleSection />
		</FormWrapper>
	);
}

const FormWrapper = styled.div`
	background-color: ${({ theme }) => theme.color.background};
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
