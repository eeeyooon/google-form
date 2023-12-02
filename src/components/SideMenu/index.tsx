import { IoAddCircleOutline, IoEyeOutline } from 'react-icons/io5';
import { SideMenuWrapper } from './styles';

export default function SideMenu() {
	return (
		<SideMenuWrapper>
			<button>
				<IoEyeOutline />
			</button>
			<button>
				<IoAddCircleOutline />
			</button>
		</SideMenuWrapper>
	);
}
