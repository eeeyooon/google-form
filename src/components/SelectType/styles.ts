import styled from 'styled-components';

import { MenuItem, Select } from '@mui/material';

export const TypeSelect = styled(Select)`
	font-size: 0.8125rem;
	height: 45px;
	padding-left: 5px;
	line-height: 45px;
	fieldset {
		border: 1px solid ${({ theme }) => theme.color.lightgray} !important;
	}
`;

export const TypeItem = styled(MenuItem)`
	font-size: 0.8125rem;
`;
