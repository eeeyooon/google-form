import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Form, Preview, Submit } from './pages';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<DndProvider backend={HTML5Backend}>
					<Route path="/" element={<Form />} />
				</DndProvider>
				<Route path="/preview" element={<Preview />} />
				<Route path="/submit" element={<Submit />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
