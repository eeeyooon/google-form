import { useDispatch } from 'react-redux';
import { TitleSectionWrapper, InputWrapper, InputTitle, InputDesc, HighlightBar } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateFormDesc, updateFormTitle } from '../../slices/formSlice';

export default function TitleSection() {
	const dispatch = useDispatch();
	const formTitle = useSelector((state: RootState) => state.form.formTitle);
	const formDesc = useSelector((state: RootState) => state.form.formDesc);

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateFormTitle(e.target.value));
	};
	const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateFormDesc(e.target.value));
	};
	return (
		<TitleSectionWrapper>
			<HighlightBar />
			<InputWrapper>
				<InputTitle
					type="text"
					placeholder="설문지 제목"
					value={formTitle}
					onChange={handleTitleChange}
					variant="standard"
				/>
				<InputDesc
					type="text"
					placeholder="설문지 설명"
					value={formDesc}
					onChange={handleDescChange}
					variant="standard"
				/>
			</InputWrapper>
		</TitleSectionWrapper>
	);
}
