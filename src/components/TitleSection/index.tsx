import { TitleSectionWrapper, InputWrapper, InputTitle, InputDesc, HighlightBar } from './styles';

export default function TitleSection() {
	return (
		<TitleSectionWrapper>
			<HighlightBar />
			<InputWrapper>
				<InputTitle type="text" placeholder="제목 없는 설문지" />
				<InputDesc type="text" placeholder="설문지 설명" />
			</InputWrapper>
		</TitleSectionWrapper>
	);
}
