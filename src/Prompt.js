/*
* @Author: zhanghuiming
* @Date:   2017-09-21 13:57:20
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-09-21 14:40:18
*/

import React from 'react';
import {BrowserRouter as Router,Route,Link,Prompt} from 'react-router-dom';

const PreventingTransitionExample = ()=>(
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Form</Link>
					</li>
					<li>
						<Link to="/one">One</Link>
					</li>
					<li>
						<Link to="/two">Two</Link>
					</li>
				</ul>
				<Route path="/" exact component={Form}/>
				<Route path="/one" render={()=>(<h3>One</h3>)}/>
				<Route path="/two" render={()=>(<h3>Two</h3>)}/>
			</div>
		</Router>
	)

class Form extends React.Component{
	state = {
		isBlocking:false
	}
	render(){
		const {isBlocking} = this.state;
		return(
			<form onSubmit={event =>{
			  event.preventDefault()
	          event.target.reset()
	          this.setState({
	            isBlocking: false
	          })
			}}>
				<Prompt
		          when={isBlocking}
		          message={location => (
		            `Are you sure you want to go to ${location.pathname}`
		          )}
		        />
				<p>isBlocking?{isBlocking?'Yes, click link or the back button':'Nope'}</p>
				<p>
					<input size="50" style={{"border":"1px solid #ccc"}} placeholder="type something to block transitions" onChange={event =>{
						this.setState({
							isBlocking:event.target.value.length > 0
						})
					}}/>
				</p>
				<button style={{"border":"1px solid #ccc"}} type="submit">Submit to stop block</button>
			</form>
			)
	}
}

export default PreventingTransitionExample;
