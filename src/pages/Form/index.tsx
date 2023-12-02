import styled from 'styled-components';

export default function Form() {
	return <ThemeTest>Form</ThemeTest>;
}

const ThemeTest = styled.div`
	background-color: ${({ theme }) => theme.color.primary};
`;
