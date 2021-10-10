import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import { AuthModalProvider, NavDropDownProvider } from './Context/';
const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
	restoreCSRF();
	window.csrfFetch = csrfFetch;
	window.store = store;
	window.sessionActions = sessionActions;
}

const Root = () => {
	return (
		<Provider store={store}>
			<NavDropDownProvider>
				<AuthModalProvider>
					<BrowserRouter>
						<App/>
					</BrowserRouter>
				</AuthModalProvider>
			</NavDropDownProvider>
		</Provider>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById('root')
);
