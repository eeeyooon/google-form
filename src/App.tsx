import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Form, Preview, Submit } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Form />} />
				<Route path="/preview" element={<Preview />} />
				<Route path="/preview/submit" element={<Submit />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
