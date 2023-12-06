import styled from 'styled-components';
import { Select, MenuItem } from '@mui/material';

export const SelectInput = styled(Select)`
	padding-right: 20px;
	margin-left: 20px;
	margin-bottom: 20px;
	fieldset {
		border: 1px solid ${({ theme }) => theme.color.lightgray} !important;
	}
`;

export const MenuItemBox = styled(MenuItem)`
	padding-left: 20px;
	padding-right: 30px;
`;
