import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ParamsExample from './UrlParams';
import AuthExample from './Redirects';
import CustomLinkExample from './CustomLink';
import Transition from './Prompt';
import NoMatch from './NoMatch';
import RecursivePath from './RecursivePath';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RecursivePath/>, document.getElementById('root'));
registerServiceWorker();