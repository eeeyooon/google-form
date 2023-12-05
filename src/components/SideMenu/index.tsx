import { IoAddCircleOutline, IoEyeOutline } from 'react-icons/io5';
import { SideMenuWrapper } from './styles';

type SideMenuProps = {
	addCard: () => void;
};
export default function SideMenu({ addCard }: SideMenuProps) {
	const MovePreview = () => {
		window.open('/preview', '_blank');
	};

	return (
		<SideMenuWrapper>
			<button className="PreviewForm" onClick={MovePreview}>
				<IoEyeOutline />
			</button>
			<button className="AddNewCard" onClick={addCard}>
				<IoAddCircleOutline />
			</button>
		</SideMenuWrapper>
	);
}
