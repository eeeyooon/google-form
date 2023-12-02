import { MdContentCopy } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CardFooterWrapper, CopyCard, DeleteCard, RequiredCard, RequiredSwitch } from './styles';

export default function CardFooter() {
	return (
		<CardFooterWrapper>
			<CopyCard>
				<MdContentCopy />
			</CopyCard>
			<DeleteCard>
				<FaRegTrashAlt />
			</DeleteCard>
			<RequiredCard>
				필수 <RequiredSwitch />
			</RequiredCard>
		</CardFooterWrapper>
	);
}
