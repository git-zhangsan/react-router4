import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import {BrowserRouter ,Route, button } from 'react-router-dom';

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
import HomePage from './HomePage';

import createBrowserHistory from 'history/createBrowserHistory';
var history = createBrowserHistory();
const location = history.location;
const unlisten = history.listen((location, action) => {
  console.log(action, location.pathname, location.state)
})


const routes = [
	{
		path:'/params',
		component:ParamsExample,
	},
	{
		path:'/redirects',
		component:AuthExample,
	},
	{
		path:'/customLink',
		component:CustomLinkExample,
	},
	{
		path:'/noMatch',
		component:NoMatch,
	},
	{
		path:'/routerconf',
		component:RouteConfigExample,
	},
	{
		path:'/sidebar',
		component:SidebarExample,
	},
	{
		path:'/home',
		component:HomePage,
	}
]

function changeFunc(e){
	history.push(e.target.dataset.to)
}

const RouteWithSubRoutes = (route)=>(<Route path={route.path} render={props =>(
			<route.component {...props} routes={route.routes}/>
	)}/>)

const App = ()=>(
	<Router basename="/"  forceRefresh={true} history={history} >
		<div>
			<ul>
				<li>
					<button onClick={changeFunc}  data-to="/params?id=1">ParamsExample</button>
				</li>
				<li>
					<button onClick={changeFunc}  data-to="/redirects">RedirectsExample</button>
				</li>
				<li>
					<button onClick={changeFunc}  data-to="/customLink">CustomLinkExample</button>
				</li>
				<li>
					<button onClick={changeFunc}  data-to="/noMatch">NoMatchExample</button>
				</li>
				<li>
					<button onClick={changeFunc}  data-to="/routerconf">RouteConfigExample</button>
				</li>
				<li>
					<button  onClick={changeFunc}  data-to="/sidebar">SidebarExample</button>
				</li>
				<li>
					<button  onClick={changeFunc}  data-to="/home">HomePage</button>
				</li>
			</ul>

			{routes.map((route, i) => (
		        <RouteWithSubRoutes key={i} {...route}/>
		     ))}
			
		</div>
	</Router>
	)

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();