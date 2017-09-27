/*
 * @Author: zhanghuiming
 * @Date:   2017-09-21 09:59:48
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-25 18:38:10
 */
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';

const AuthExample = () => (
	<Router>
		<div>
			 <AuthButton/>
			 <ul>
			 	<li>
			 		<Link to="/public">Public Page</Link>
			 	</li>
			 	<li>
			 		<Link to="/protected">Protected Page</Link>
			 	</li>
			 </ul>
			 <Route path="/public" component={Public}/>
			 <Route path="/login" component={Login}/>
			 <PrivateRoute path="/protected" component={Protected}/>
		</div>
	</Router>
)
const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true;
		setTimeout(cb, 100);
	},
	signout(cb) {
		this.isAuthenticated = false;
		setTimeout(cb, 100)
	}
}
const Public = () => (<h3>Public Page</h3>)
const Protected = () => (<h3>Protected Page</h3>)

class Login extends React.Component {
	state = {
		redirectToReferrer: false
	}

	login = () => {
		fakeAuth.authenticate(() => {
			this.setState({
				redirectToReferrer: true
			})
		})
	}
	componentWillMount(){
		console.log('=====componentWillMount=======');
	}
	render() {
		const {
			from
		} = this.props.location.state || {
			from: {
				pathname: '/'
			}
		};
		const {
			redirectToReferrer
		} = this.state;

		if (redirectToReferrer) {
			console.dir(from)
			return (
				<Redirect to={from}/>
			)
		}
		var URL = window.location.href;
		return (
			<div>
				<p>{URL}</p>
				<p>You must log in to view the page at {from.pathname}</p>
				<button onClick={this.login}>Log in</button>
			</div>
		)
	}
}

const AuthButton = withRouter(({
	history
}) => (
	fakeAuth.isAuthenticated ? (<p>Welcome! <button onClick={()=>{fakeAuth.signout(()=>history.push('/'))}}>Sign out</button> </p>) : (<p>You are not Logged in.</p>)
))

const PrivateRoute = ({
	component: Component,
	...rest
}) => (<Route {...rest} render={props=>(fakeAuth.isAuthenticated?<Component {...props}/>: (<Redirect to={{pathname:'/login',state:{from: props.location}}}/>))
}
/>)

export default AuthExample;