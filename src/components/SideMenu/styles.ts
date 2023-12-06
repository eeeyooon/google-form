import styled from 'styled-components';

export const SideMenuWrapper = styled.div`
	width: 40px;
	height: 80px;
	background-color: ${({ theme }) => theme.color.white};
	border-radius: 8px;
	position: absolute;
	top: 0;
	right: -7%;
	transform: translate(0, 50%);
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.color.lightgray};

	button {
		font-size: 1.25rem;
		color: ${({ theme }) => theme.color.gray};
	}
`;
