# 구글 설문조사 구현

<br/>

## 프로젝트 설치 및 실행

해당 프로젝트를 열고 다음과 같이 명령어를 실행해주세요.

```
npm install
yarn install
```

```
npm run start
yarn start
```

<br/>
<br/>
<br/>

## 기술 스택

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/>
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>

  <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=flat&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat&logo=styled-components&logoColor=white"/>

폴더 구조와 라이브러리는 README 하단에서 확인할 수 있습니다.

<br/>
<br/>
<br/>

## 구현 기능

### 구글 설문조사 기본 기능

![기본설문조사기능](https://github.com/eeeyooon/portfolio/assets/102462534/4ad6f161-791b-4e43-b5c2-5ce5938b8f91)

- 설문지 제목과 설명을 추가 및 편집할 수 있습니다.
- 질문을 추가하고, 질문의 유형을 선택할 수 있습니다.
  (단답형, 장문형, 객관식 질문, 체크박스, 드롭다운)
- 필수 옵션 설정이 가능합니다.

<br/>
<br/>

### 질문 복사, 삭제 기능

![질문복사](https://github.com/eeeyooon/portfolio/assets/102462534/11f2884d-9853-43cb-84b9-476aa22d9abb)

- 질문을 복사할 수가 있습니다. 질문의 유형, 내용과 질문 안의 옵션들, 필수 옵션까지 모두 복사가 됩니다.
- 질문을 삭제할 수 있습니다.

<br/>
<br/>

### 질문 순서 변경 (Drag & Drop)

![질문드래그앤드랍](https://github.com/eeeyooon/portfolio/assets/102462534/3fd589d5-8588-4816-8954-150a804f7a18)

- 질문의 순서를 드래그앤드랍을 통해 자유롭게 변경할 수 있습니다.

<br/>
<br/>

### 질문의 옵션 순서 변경 (Drag & Drop)

![옵션삭제및순서변경](https://github.com/eeeyooon/portfolio/assets/102462534/1ca42cba-e0a3-4477-aaeb-63fa9df8d3f8)

- 질문의 옵션 순서를 드래그앤드랍을 통해 자유롭게 변경할 수 있습니다.
- 옵션을 삭제할 수 있습니다.

<br/>
<br/>

### 미리 보기 및 양식 지우기 기능

![설문지미리보기](https://github.com/eeeyooon/portfolio/assets/102462534/23a87d43-bd10-45e3-99d0-143cc3c6b576)

- 설문지의 미리보기가 가능합니다.
- 사용자가 생성한 설문지 그대로 답변을 입력하고 선택하는 것이 가능합니다.
- 양식 지우기 버튼을 누르면 사용자가 입력한 답변들을 모두 지울 수 있습니다.

<br/>
<br/>

### 설문지 응답 제출하기

![제출하기](https://github.com/eeeyooon/portfolio/assets/102462534/b56cc3a5-7077-4a04-86e9-90ba8ddd7004)

- 미리보기에서 설문지에 대해 응답한 내용을 한 눈에 확인할 수 있습니다.

<br/>
<br/>

### 사용자 친화적인 UI/UX

![필수질문미입력](https://github.com/eeeyooon/portfolio/assets/102462534/c623528a-e3a4-4ce1-b222-80273cd0048a)

- 사용자가 선택한 질문이나 옵션 입력창에 포커스, 하이라이트 등을 추가하여 명확히 확인할 수 있게 구현하였습니다.
- 필수 옵션이 설정된 질문에 입력을 하지 않으면 해당 질문에 하이라이트를 추가하여 사용자가 바로 알 수 있게 하였습니다.

<br/>
<br/>

### 질문 데이터 저장

![구글폼-persist](https://github.com/eeeyooon/portfolio/assets/102462534/d16c365e-216c-4a67-beed-98762f9e1800)

- `redux-persist`를 사용하여 질문 데이터를 `localstorage`에 저장하였기때문에 브라우저 새로고침을 해도 질문 데이터가 그대로 유지 됩니다.

<br/>
<br/>

<br/>
<br/>
<br/>

## 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Card
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂CardFooter
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂CardHeader
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂PreviewCard
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂PreviewCheckbox
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂PreviewDnd
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂PreviewInputText
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂PreviewRadio
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Question
 ┃ ┃ ┣ 📂OptionQuestion
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📂TextQuestion
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂SelectType
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂SideMenu
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂TitleSection
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┗ 📜styles.ts
 ┣ 📂const
 ┃ ┗ 📜QuestionTypes.ts
 ┣ 📂pages
 ┃ ┣ 📂Form
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Preview
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Submit
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┗ 📜index.ts
 ┣ 📂slices
 ┃ ┣ 📜formSlice.ts
 ┃ ┣ 📜previewSlice.ts
 ┃ ┗ 📜questionSlice.ts
 ┣ 📂store
 ┃ ┗ 📜index.ts
 ┣ 📂style
 ┃ ┣ 📜global.ts
 ┃ ┗ 📜theme.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

<br/>

## 라이브러리

```
	"dependencies": {
		"@emotion/react": "^11.11.1",
		"@emotion/styled": "^11.11.0",
		"@mui/material": "^5.14.19",
		"@reduxjs/toolkit": "^1.9.7",
		"@testing-library/jest-dom": "^5.17.0",
		"@testing-library/react": "^13.4.0",
		"@testing-library/user-event": "^13.5.0",
		"@types/jest": "^27.5.2",
		"@types/node": "^16.18.66",
		"@types/react": "^18.2.40",
		"@types/react-beautiful-dnd": "^13.1.7",
		"@types/react-dom": "^18.2.17",
		"@types/react-redux": "^7.1.31",
		"react": "^18.2.0",
		"react-beautiful-dnd": "^13.1.1",
		"react-dom": "^18.2.0",
		"react-icons": "^4.12.0",
		"react-redux": "^8.1.3",
		"react-router-dom": "^6.20.1",
		"react-scripts": "5.0.1",
		"redux": "^4.2.1",
		"redux-persist": "^6.0.0",
		"styled-components": "^6.1.1",
		"styled-reset": "^4.5.1",
		"typescript": "^4.9.5",
		"web-vitals": "^2.1.4"
	},
```

<br/>
