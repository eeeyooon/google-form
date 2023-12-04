import { IoAddCircleOutline, IoEyeOutline } from 'react-icons/io5';
import { SideMenuWrapper } from './styles';

type SideMenuProps = {
	addCard: () => void;
};
export default function SideMenu({ addCard }: SideMenuProps) {
	return (
		<SideMenuWrapper>
			<button className="PreviewForm">
				<IoEyeOutline />
			</button>
			<button className="AddNewCard" onClick={addCard}>
				<IoAddCircleOutline />
			</button>
		</SideMenuWrapper>
	);
}
