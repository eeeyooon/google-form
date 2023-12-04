import styled from 'styled-components';
import TitleSection from '../../components/TitleSection';
import SideMenu from '../../components/SideMenu';
import Card from '../../components/Card';

export default function Form() {
	return (
		<FormWrapper>
			<TitleSection />
			<Card />
			<SideMenu />
		</FormWrapper>
	);
}

const FormWrapper = styled.div`
	background-color: ${({ theme }) => theme.color.background};
	height: 100vh;
	width: 100%;
	position: relative;
`;
