/*
* @Author: zhanghuiming
* @Date:   2017-09-22 10:33:28
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-09-22 10:51:05
*/
import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';




const Main = ()=>(<h2>Main!</h2>);

const Sandwiches = ()=>(<h2>Sandwiches</h2>)

const Tacos = ({routes})=>(
	<div>
		<h2>Tacos</h2>
		<ul>
			<li>
				<Link to="/tacos/bus">Bus</Link>
			</li>
			<li>
				<Link to="/tacos/cart">Cart</Link>
			</li>
		</ul>
		{
			routes.map((item,index)=>(
					<RouteWithSubRoutes key={index} {...item}/>
				))

		}
	</div>
	)
const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>
const routes = [
	{
		path:'/sandwiches',
		component:Sandwiches,
	},
	{
		path:'/tacos',
		component:Tacos,
		routes:[
		  { path: '/tacos/bus',
	        component: Bus
	      },
	      { path: '/tacos/cart',
	        component: Cart
	      }
		]
	}
]


const RouteWithSubRoutes = (route)=>(<Route path={route.path} render={props =>(
			<route.component {...props} routes={route.routes}/>
	)}/>)

const RouteConfigExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/tacos">Tacos</Link></li>
        <li><Link to="/sandwiches">Sandwiches</Link></li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default RouteConfigExample



