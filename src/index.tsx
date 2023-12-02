import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './style/global';
import { defaultTheme } from './style/theme';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
