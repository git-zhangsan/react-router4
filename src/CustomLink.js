/*
 * @Author: zhanghuiming
 * @Date:   2017-09-21 11:15:03
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-21 13:37:21
 */

import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

const CustomLinkExample = () => (
	<Router>
		<div>
			<OldSchoolMenuLink to="/" activeOnlyWhenExact={true} label="Home"/>
			<OldSchoolMenuLink to="/about" label="About"/>
			<hr/>
			<Route exact path="/" component={Home}></Route>
			<Route path="/about" component={About}></Route>
		</div>
	</Router>
)

const OldSchoolMenuLink = ({
	activeOnlyWhenExact,
	to,
	label
}) => ( <Route path = {to} exact = {activeOnlyWhenExact}
	children = {
		({
			match
		}) => (
			<div className={match?'active':''}>
			{match?'> ':' '}<Link to={to}>{label}</Link>
		</div>
		)
	}
	/>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default CustomLinkExample