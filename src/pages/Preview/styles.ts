import styled from 'styled-components';

export const PreviewWrapper = styled.div`
	background-color: ${({ theme }) => theme.color.background};
	width: 100%;
	margin-bottom: 40px;
`;

export const FormTitleSection = styled.div`
	width: 768px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.color.white};
	margin-top: 12px;
	padding-bottom: 15px;
	border: 1px solid ${({ theme }) => theme.color.lightgray};
	border-top: 10px solid ${({ theme }) => theme.color.primary};
`;

export const FormTitle = styled.h1`
	height: 65px;
	font-size: 32px;
	padding-top: 12px;
	padding-left: 20px;

	&::placeholder {
		color: ${({ theme }) => theme.color.black};
	}
`;

export const FormDesc = styled.div`
	height: 24px;
	font-size: 0.875rem;
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 8px;
	margin-bottom: 10px;
`;

export const FormInfo = styled.p`
	border-top: 1px solid ${({ theme }) => theme.color.lightgray};
	padding-top: 10px;
	padding-left: 20px;
	line-height: 30px;
	color: ${({ theme }) => theme.color.red};
	font-size: 14px;
`;

export const PreviewSubmitBtn = styled.button`
	width: 80px;
	text-align: center;
	background-color: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	padding: 10px 5px;
	border-radius: 5px;
	font-size: 1.0625rem;
`;

export const PreviewBtnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
`;
export const AnswerResetBtn = styled.button`
	font-size: 0.9375rem;
	color: ${({ theme }) => theme.color.primary};
`;
