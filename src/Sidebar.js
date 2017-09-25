/*
* @Author: zhanghuiming
* @Date:   2017-09-22 10:19:57
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-09-22 10:32:34
*/
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
	{
		path:'/',
		exact:true,
		sidebar:()=>(<div>Home!</div>),
		main:()=>(<h2>home!</h2>)
	},
	{
		path:'/bubblegum',
		sidebar:()=>(<div>Bubblegum!</div>),
		main:()=>(<h2>bubblegum!</h2>)
	},
	{
		path:'/shoelaces',
		sidebar:()=>(<div>Shoelaces!</div>),
		main:()=>(<h2>shoelaces!</h2>)
	}
]

const SidebarExample = ()=>(
	<Router>
		<div style={{display: 'flex'}}>
			<div  style={{
		        padding: '10px',
		        width: '40%',
		        background: '#f0f0f0'
		     }}>
				<ul style={{ listStyleType: 'none', padding: 0 }}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/bubblegum">Bubblegum</Link>
					</li>
					<li>
						<Link to="/shoelaces">Shoelaces</Link>
					</li>
				</ul>
				{routes.map((route,index)=>(
					<Route key={index} path={route.path} exact={route.exact} component={route.sidebar}/>
					))}
			</div>


			<div style={{ flex: 1, padding: '10px' }}>
				{routes.map((item,index)=>(
					<Route key={index} path={item.path} exact={item.exact} component={item.main}/>
					))}
			</div>
		</div>
	</Router>
	)

export default SidebarExample;