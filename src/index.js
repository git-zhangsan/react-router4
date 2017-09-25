import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom';

import './index.css';
// import App from './App';
import ParamsExample from './UrlParams';
import AuthExample from './Redirects';
import CustomLinkExample from './CustomLink';
import Transition from './Prompt';
import NoMatch from './NoMatch';
import RecursivePath from './RecursivePath';
import SidebarExample from './Sidebar';
import RouteConfigExample from './RouteConfig';

import registerServiceWorker from './registerServiceWorker';

const App = ()=>(
	<BrowserRouter basename="/" forceRefresh={true}>
		<div>
			<ul>
				<li>
					<Link to="/params">ParamsExample</Link>
				</li>
				<li>
					<Link to="/redirects">RedirectsExample</Link>
				</li>
				<li>
					<Link to="/customLink">CustomLinkExample</Link>
				</li>
				<li>
					<Link to="/noMatch">NoMatchExample</Link>
				</li>
				<li>
					<Link to="/routerconf">RouteConfigExample</Link>
				</li>
				<li>
					<Link to="/sidebar">SidebarExample</Link>
				</li>
			</ul>

			<Route path="/params" component={ParamsExample}/>
			<Route path="/redirects" component={AuthExample}/>
			<Route path="/customLink" component={CustomLinkExample}/>
			<Route path="/noMatch" component={NoMatch}/>
			<Route path="/sidebar" component={SidebarExample}/>
			<Route path="/routerconf" component={RouteConfigExample}/>
		</div>
	</BrowserRouter>
	)

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();