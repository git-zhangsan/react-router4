/*
* @Author: zhanghuiming
* @Date:   2017-09-25 18:24:47
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-09-25 19:28:51
*/
import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
var history = createBrowserHistory();
// history.push('/sidebar');
const location = history.location;
console.log(location);
export default class HomePage extends React.Component {
	constructor(props) {
		super(props)
		
	}
	componentWillMount(){
		console.log('=====componentWillMount=======');
	}
	componentDidMount(){}
	componentWillUnmount(){
		console.log('=====componentWillUnmount=======');
	}
	render(){
		return(
				<h3>Home Page {location.pathname} -{window.location.pathname}</h3>
			)
	}
	
}