使用create-react-app创建

关于create-react-app 详情参见：(https://github.com/facebookincubator/create-react-app).

本示例旨在学习了解react-router4.x版本。

API Document:

<BrowserRouter>

使用HTML5历史记录API（pushState，replaceState和popstate事件）的<Router>来保持您的UI与URL同步。

Code:

`
	import { BrowserRouter } from 'react-router-dom'

	<BrowserRouter
	  basename={optionalString}
	  forceRefresh={optionalBool}
	  getUserConfirmation={optionalFunc}
	  keyLength={optionalNumber}
	>
	  <App/>
	</BrowserRouter>
`

属性：

- basename: string

所有locations的基本URL。如果应用程序从服务器上的子目录提供，则需要将其设置为子目录。正确格式的基础名称应该有一个主要的斜杠，但没有尾部斜线。

`
	<BrowserRouter basename="/calendar"/>
	<Link to="/today"/> // renders <a href="/calendar/today">
`

- getUserConfirmation: func

用于确认导航的功能。默认使用window.confirm。

`
	// this is the default behavior
	const getConfirmation = (message, callback) => {
	  const allowTransition = window.confirm(message)
	  callback(allowTransition)
	}

	<BrowserRouter getUserConfirmation={getConfirmation}/>
`

- forceRefresh: bool

如果为true，则路由器将在页面导航中使用全页刷新。您可能只想在不支持HTML5历史记录API的浏览器中使用此功能。

`
	const supportsHistory = 'pushState' in window.history
	<BrowserRouter forceRefresh={!supportsHistory}/>
`

- keyLength: number

location.key的长度。默认为6。

`
	<BrowserRouter keyLength={12}/>

`

- children: node

要呈现的单个子元素。



<HashRouter>

使用URL的哈希部分（即window.location.hash）的<Router>来保持您的UI与URL同步。

重要的提示：Hash history不支持location.key或location.state。在以前的版本中，我们试图减少行为，但是有一些边缘案例我们无法解决。
任何需要此行为的代码或插件将无法正常工作。由于此技术仅用于支持旧版浏览器，因此我们建议您将服务器配置为使用<BrowserHistory>。

`
	import { HashRouter } from 'react-router-dom'
	
	<HashRouter>
	  <App/>
	</HashRouter>
`

- basename: string

所有locations的基本URL。正确格式的基础名称应该有一个主要的斜杠，但没有尾部斜线。

`
	<HashRouter basename="/calendar"/>
	<Link to="/today"/> // renders <a href="#/calendar/today">
`

- getUserConfirmation: func

用于确认导航的功能。默认使用window.confirm。

`
	 // this is the default behavior
	const getConfirmation = (message, callback) => {
	  const allowTransition = window.confirm(message)
	  callback(allowTransition)
	}
	<HashRouter getUserConfirmation={getConfirmation}/>

`

- hashType: string

用于window.location.hash的编码类型。可用值为：

"slash": 创建一个hash值，例如：#/ and #/sunshine/lollipops
"noslash": 创建一个hash值，例如：#  and #sunshine/lollipops
”hashbang“: 创建一个”ajax crawlable” (已被谷歌弃用) 例如：#!/ and #!/sunshine/lollipops

默认值"slash"

- children: node
要呈现的单个子元素。

<Link>

在应用程序范围提供声明性，可访问的导航

`
	import { Link } from 'react-router-dom'

	<Link to="/about">About</Link>
`

- to: string

链接到的路径名或位置。

`
	<Link to="/courses"/>

`

- to: object

要链接的位置。

`
	 <Link to={{
	  pathname: '/courses',
	  search: '?sort=name',
	  hash: '#the-hash',
	  state: { fromDashboard: true }
	}}/>
`

- replace: bool

如果为true，单击链接将替换历史堆栈中的当前条目，而不是添加新条目。

`
	<Link to="/courses" replace />
`

<NavLink>

一种特殊版本的<Link>，当与当前URL匹配时，将向渲染元素添加样式属性。

`
	import { NavLink } from 'react-router-dom'

	<NavLink to="/about">About</NavLink>
`

- activeClassName: string

当活动时给出元素的类。默认给定类是活动的。这将与className支持相结合。

`
	<NavLink
	  to="/faq"
	  activeClassName="selected"
	>FAQs</NavLink>
`

- activeStyle: object

当元素处于活动状态时应用于元素的样式。

`
	<NavLink
	  to="/faq"
	  activeStyle={{
	    fontWeight: 'bold',
	    color: 'red'
	   }}
	>FAQs</NavLink>
`

- exact: bool

当为true时，仅当位置匹配完全时才会应用活动类/样式。

`
	<NavLink
	  exact
	  to="/profile"
	>Profile</NavLink>
`

- strict: bool

当为真时，在确定位置是否与当前网址匹配时，将考虑位置路径名上的尾部斜线。
有关详细信息，请参阅<Route strict>文档。(https://reacttraining.com/core/api/Route/strict-bool)

`
	<NavLink
	  strict
	  to="/events/"
	>Events</NavLink>
`

- isActive: func

增加用于确定链接是否活动的额外逻辑的功能。如果您想要更多地验证链接的路径名与当前URL的路径名匹配，则应该使用这一点。

`
	// 只有当事件ID为奇数时，才考虑事件有效
	const oddEvent = (match, location) => {
	  if (!match) {
	    return false
	  }
	  const eventID = parseInt(match.params.eventID)
	  return !isNaN(eventID) && eventID % 2 === 1
	}

	<NavLink
	  to="/events/123"
	  isActive={oddEvent}
	>Event 123</NavLink>
`

- location: object

isActive比较当前的历史位置（通常是当前的浏览器URL）。要与其他位置进行比较，可以传递一个位置。


<Prompt>

https://reacttraining.com/core/api/Prompt


<MemoryRouter>

将“URL”的历史记录保存在内存中（不读取或写入地址栏）的<路由器>。在测试和非浏览器环境（如React Native）中很有用

`
	import { MemoryRouter } from 'react-router'

	<MemoryRouter>
	  <App/>
	</MemoryRouter>
`

- initialEntries: array

历史堆栈中的一系列位置。这些可能是具有{pathname，search，hash，state}或简单字符串URL的完整的位置对象。

`
	<MemoryRouter
	  initialEntries={[ '/one', '/two', { pathname: '/three' } ]}
	  initialIndex={1}
	>
	  <App/>
	</MemoryRouter>
`

- initialIndex: number

initialEntries数组中的初始位置索引。

- getUserConfirmation: func

用于确认导航的功能。当使用<MemoryRouter>直接使用<Prompt>时，必须使用此选项。

- keyLength: number

location.key的长度。默认为6

`
	<MemoryRouter keyLength={12}/>

`

- children: node

要呈现的单个子元素。



<Redirect>

渲染<Redirect>将导航到新位置。新位置将覆盖历史堆栈中的当前位置，如服务器端重定向（HTTP 3xx）。

`
	import { Route, Redirect } from 'react-router'

	<Route exact path="/" render={() => (
	  loggedIn ? (
	    <Redirect to="/dashboard"/>
	  ) : (
	    <PublicHomePage/>
	  )
	)}/>
`

- to: string

要重定向到的网址。

`
	<Redirect to="/somewhere/else"/>

`

- to: object

要重定向到的位置。

`
	<Redirect to={{
	  pathname: '/login',
	  search: '?utm=your+face',
	  state: { referrer: currentLocation }
	}}/>
`

- push: bool

当为true时，重定向会将新条目推入历史记录，而不是替换当前条目。

`
	<Redirect push to="/somewhere/else"/>
`

- from: string

要重定向的路径名。这只能用于在<Switch>内部呈现<Redirect>时匹配位置。
有关详细信息，请参阅<Switch children>。https://reacttraining.com/web/api/Switch/children-node


`
	<Switch>
	  <Redirect from='/old-path' to='/new-path'/>
	  <Route path='/new-path' component={Place}/>
	</Switch>
`


<Route>

路由组件可能是React Router中了解和学习使用的最重要的组件。其最基本的责任是在位置与路线的路径匹配时呈现一些UI。

`
	import { BrowserRouter as Router, Route } from 'react-router-dom'

	<Router>
	  <div>
	    <Route exact path="/" component={Home}/>
	    <Route path="/news" component={NewsFeed}/>
	  </div>
	</Router>
	  <Home/>
	  <!-- react-empty: 2 -->
	</div>
	  <!-- react-empty: 1 -->
	  <NewsFeed/>
	</div>
`


Route render methods

有3种方法可以使用<Route>呈现某些东西：

	** <Route component>
	** <Route render>
	** <Route children>

每个在不同的情况下都有用。您只能在给定的<Route>上使用这些方法之一。请看下面的解释，了解为什么你有3个选项。大多数时候你会使用component。	

Route props

所有三个渲染方法将通过相同的三个route props

	** match
	** location
	** history

- component

仅当位置匹配时才呈现的React组件.它将与route props一起呈现。	

当您使用组件（而不是下面的渲染或子项）时，路由器使用React.createElement从给定组件创建一个新的React元素。
这意味着如果您向组件属性提供内联函数，则可以在每个渲染中创建一个新组件.这将导致现有组件卸载和新组件安装，而不是仅更新现有组件
当使用内联函数进行内联渲染时，请使用render或child（下文）

`
	<Route path="/user/:username" component={User}/>

	const User = ({ match }) => {
	  return <h1>Hello {match.params.username}!</h1>
	}
`


- render: func

这允许方便的在线呈现和包装，而不需要上述的不期望的重新安装。您可以使用组件支持为您创建一个新的React元素，而不必在位置匹配时传入要调用的函数。
渲染道具接收与组件渲染道具相同的所有route props。

警告：<Route component>取决于<Route render>，所以不要在同一个<Route>中使用两者

`
	// 方便的内联呈现
	<Route path="/home" render={() => <div>Home</div>}/>

	// 包装/合成
	const FadingRoute = ({ component: Component, ...rest }) => (
	  <Route {...rest} render={props => (
	    <FadeIn>
	      <Component {...props}/>
	    </FadeIn>
	  )}/>
	)

	<FadingRoute path="/cool" component={Something}/>
`

- children: func

有时您需要渲染路径是否匹配该位置。在这些情况下，可以使用函数child prop。它的工作原理就像渲染，除了它被调用是否有匹配
children 渲染prop接收与组件和渲染方法相同的所有route props，除非路由未能匹配URL，则match为null。
这允许您根据路线是否匹配来动态调整用户界面。在这里，如果路由匹配，我们添加一个活动类

警告：<Route component>和<Route render>优先级高于<Route children>，所以不要在同一个<Route>中使用多个

`
	<ul>
	  <ListItemLink to="/somewhere"/>
	  <ListItemLink to="/somewhere-else"/>
	</ul>

	const ListItemLink = ({ to, ...rest }) => (
	  <Route path={to} children={({ match }) => (
	    <li className={match ? 'active' : ''}>
	      <Link to={to} {...rest}/>
	    </li>
	  )}/>
	)

	//可以用于动画
	<Route children={({ match, ...rest }) => (
	  {/* Animate will always render, so you can use lifecycles
	      to animate its child in and out */}
	  <Animate>
	    {match && <Something {...rest}/>}
	  </Animate>
	)}/>
`

- path: string

path-to-regexp理解的任何有效的URL路径。

`
	<Route path="/users/:id" component={User}/>

`

- exact: bool

当为true时，仅当路径与location.pathname完全匹配时才匹配。

`
	<Route exact path="/one" component={About}/>

`

	 ______________________________________________
	| path |  location.pathname	| exact	| matches? |
	|	   |					|		|		   |
	| /one |  /one/two			| true	|  no	   |
	|	   |					|		|		   |
	| /one |  /one/two			| false	|  yes	   |
	 ----------------------------------------------

- strict: bool

当为true时，具有尾部斜杠的路径将仅与具有尾部斜杠的location.pathname匹配。当在location.pathname中有其他URL段时，这不起作用。

<Route strict path="/one/" component={About}/>

	 ________________________________________
	| path  | location.pathname	|  matches? |
	|	    |					|		    |
	| /one/ |  /one			    |   no	    |
	|	    |					|		    |
	| /one/ |  /one/			|   yes	    |
	|	    |					|		    |
	| /one/ |  /one/two			|   yes	    |
	 ----------------------------------------


警告：strict可以用来强制执行location.pathname没有尾部斜杠，但为了做到这一点，strict和exact必须是true。

`
	<Route exact strict path="/one" component={About}/>
`

	 ________________________________________
	| path  | location.pathname	|  matches? |
	|	    |					|		    |
	| /one  |  /one			    |   yes	    |
	|	    |					|		    |
	| /one  |  /one/			|   no	    |
	|	    |					|		    |
	| /one  |  /one/two			|   no	    |
	 ----------------------------------------

- location: object

<Route>元素尝试将其路径与当前历史记录位置（通常是当前浏览器URL）进行匹配。但是，也可以传递具有不同路径名的位置进行匹配。
https://reacttraining.com/react-router/location.md

当您需要将<Route>匹配到当前历史记录位置以外的位置时，这是非常有用的，如“动画转换”示例所示。	
https://reacttraining.com/react-router/web/example/animated-transitions 

如果<Switch>元素包裹在<Switch>中并匹配传递给<Switch>（或当前历史位置）的位置，则传递给<Route>的位置prop将被<开关>（在此给出）
https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Switch.js#L51


<Router>

所有路由器组件的通用低级接口。通常，应用程序将使用其中一个高级路由器：

	** <BrowserRouter>
	** <HashRouter>
	** <MemoryRouter>
	** <NativeRouter>
	** <StaticRouter>

使用低级“路由器”最常见的用例是将自定义历史记录与状态管理库（如Redux或Mobx）进行同步。请注意，这不是与React Router一起使用状态管理库，而只用于深度集成。

`
	import { Router } from 'react-router'
	import createBrowserHistory from 'history/createBrowserHistory'

	const history = createBrowserHistory()

	<Router history={history}>
	  <App/>
	</Router>
`

- history: object

用于导航的历史对象。

`
	import createBrowserHistory from 'history/createBrowserHistory'

	const customHistory = createBrowserHistory()
	<Router history={customHistory}/>
`

- children: node

要呈现的单个子元素。

`
	<Router>
	  <App/>
	</Router>
`


<StaticRouter>

一个从不改变位置的<Router>。

当用户实际上没有点击时，这在服务器端渲染场景中很有用，因此该位置从未实际改变。因此，名称：static。当您只需插入一个位置并在渲染输出上作出断言时，它也可用于简单的测试。

以下是一个示例节点服务器，为<Redirect>发送302状态代码，并为其他请求发送常规HTML

`
	import { createServer } from 'http'
	import React from 'react'
	import ReactDOMServer from 'react-dom/server'
	import { StaticRouter } from 'react-router'

	createServer((req, res) => {

	  // This context object contains the results of the render
	  const context = {}

	  const html = ReactDOMServer.renderToString(
	    <StaticRouter location={req.url} context={context}>
	      <App/>
	    </StaticRouter>
	  )

	  // context.url will contain the URL to redirect to if a <Redirect> was used
	  if (context.url) {
	    res.writeHead(302, {
	      Location: context.url
	    })
	    res.end()
	  } else {
	    res.write(html)
	    res.end()
	  }
	}).listen(3000)
`

- basename: string

所有位置的基本URL。正确格式化的基础名称应该有一个主要的斜杠，但没有尾部斜线

`
	<StaticRouter basename="/calendar">
	  <Link to="/today"/> // renders <a href="/calendar/today">
	</StaticRouter>
`

- location: string

服务器接收到的URL，可能是节点服务器上的req.url。

`
	 <StaticRouter location={req.url}>
	  <App/>
	</StaticRouter>
`

- location: object

一个像{pathname，search，hash，state}的位置对象

`
	<StaticRouter location={{ pathname: '/bubblegum' }}>
	  <App/>
	</StaticRouter>
`

- context: object

一个简单的JavaScript对象。在渲染过程中，组件可以向对象添加属性以存储有关渲染的信息。

`
	 const context = {}
	<StaticRouter context={context}>
	  <App />
	</StaticRouter>

`

当<Route>匹配时，它会将context对象传递给它作为staticContext prop所呈现的组件。查看“服务器渲染”指南，
https://reacttraining.com/web/guides/server-rendering 了解有关如何自行执行此操作的更多信息。

渲染后，这些属性可用于配置服务器的响应。

- children: node


<Switch>

渲染与位置匹配的第一个子元素<Route> 或 <Redirect> 。

<Switch>是独特的，因为它仅仅渲染一个路由。相反，与位置匹配的每个<Route>都会包含。

参考以下代码：
`
	<Route path="/about" component={About}/>
	<Route path="/:user" component={User}/>
	<Route component={NoMatch}/>
`
如果URL是/about，则<About>，<User>和<NoMatch>将全部渲染，因为它们都与路径匹配。这是通过设计，允许我们以许多方式将<Route>组合到我们的应用程序中，如侧边栏和面包屑，引导标签等。

然而，偶尔，我们只想选择一个<路线>来渲染。如果我们在/关于我们不想也匹配/：用户（或显示我们的“404”页面）。以下是使用Switch的方法：

`
	import { Switch, Route } from 'react-router'

	<Switch>
	  <Route exact path="/" component={Home}/>
	  <Route path="/about" component={About}/>
	  <Route path="/:user" component={User}/>
	  <Route component={NoMatch}/>
	</Switch>
`

现在，如果我们在/ about，<Switch>将开始寻找匹配的<Route>。 <Route path =“/ about”/>将匹配，<Switch>将停止寻找匹配并呈现<About>。同样，如果我们在/ michael，那么<User>将呈现。


这对于动画转换也是有用的，因为匹配的<Route>呈现与前一个相同的位置。

`
	<Fade>
	  <Switch>
	    {/* there will only ever be one child here */}
	    <Route/>
	    <Route/>
	  </Switch>
	</Fade>

	<Fade>
	  <Route/>
	  <Route/>
	  {/* there will always be two children here,
	      one might render null though, making transitions
	      a bit more cumbersome to work out */}
	</Fade>
`

Switch props

- location: object

要用于匹配子元素而不是当前历史位置（通常是当前浏览器URL）的位置对象。

- children: node

<Switch>的所有子项应为<Route>或<Redirect>元素。只有匹配当前位置的第一个子元素才会呈现

<Route>元素使用它们的路径匹配匹配，并且<Redirect>元素使用它们与prop相匹配。没有路径的<Route>或路由不正确的<Redirect>将始终与当前位置匹配。

当您在<Switch>中包含<Redirect>时，它可以使用任何<Route>的位置匹配道具：path，exact和strict。只是path prop的别名。

如果给定位置支持<Switch>，它将覆盖匹配的子元素上的path prop。

`
	<Switch>
	  <Route exact path="/" component={Home}/>

	  <Route path="/users" component={Users}/>
	  <Redirect from="/accounts" to="/users"/>

	  <Route component={NoMatch}/>
	</Switch>
`

history

本文档中的“历史”和“历史对象”一词是指历史包，https://github.com/ReactTraining/history 这是React 
Router的唯一两个主要依赖之一（除了React本身）之外，并且其提供用于在各种环境中的JavaScript中管理会话历史的几种不同实现

使用以下术语：

“browser history” : DOM特定的实现，可用于支持HTML5历史记录API的Web浏览器
“hash history” : 遗留网络浏览器的DOM特定实现
“memory history” : 内存中的历史记录实现，可用于测试和非DOM环境（如React Native）

history对象通常具有以下属性和方法：

length : （number）历史堆栈中的条目数
action : （string）当前动作（PUSH，REPLACE或POP）
location : (object) 当前位置。具有以下属性：
			pathname: URL的路径
			search: URL查询字符串
			hash: URL哈希片段
			state: 位置特定的状态被提供给例如。当这个位置被推到堆栈上时，push（路径，状态）。仅在浏览器和内存历史记录中可用。
push : (path, [state]) - (function) 将新条目推入历史堆栈
replace : (path, [state]) - (function) 替换历史堆栈上的当前条目
go(n) : (function) 将历史堆栈中的指针移动n个条目
goBack() : 	(function) 相当于 go(-1)
goForward() : (function) 相当于 go(1)		
block : (function) 防止导航 (https://github.com/ReactTraining/history#blocking-transitions)	


history is mutable

history 对象是可变的。因此，建议从<Route>的渲染道具访问位置，而不是从history.location访问。这样可以确保您对于React的假设在生命周期挂钩中是正确的。例如：

`
	class Comp extends React.Component {
	  componentWillReceiveProps(nextProps) {
	    // will be true
	    const locationChanged = nextProps.location !== this.props.location

	    // INCORRECT, will *always* be false because history is mutable.
	    const locationChanged = nextProps.history.location !== this.props.history.location
	  }
	}

	<Route component={Comp}/>
`

详细信息参考：https://github.com/ReactTraining/history#properties


location

位置代表了应用程序现在的位置，您想要哪里，甚至是哪里。看起来像这样

`
	{
	  key: 'ac3df4', // not with HashHistory!
	  pathname: '/somewhere'
	  search: '?some=search-string',
	  hash: '#howdy',
	  state: {
	    [userDefined]: true
	  }
	}
`

路由器将在几个地方为您提供位置对象

	Route component as this.props.location
	Route render as ({ location }) => ()
	Route children as ({ location }) => ()
	withRouter as this.props.location

它也发现在history.location，但你不应该使用它，因为它的可变。您可以在历史文档中阅读更多信息。

https://reacttraining.com/web/api/history

位置对象从不被突变，因此您可以在生命周期钩子中使用它来确定何时导航，这对数据获取和动画非常有用。

`
	componentWillReceiveProps(nextProps) {
	  if (nextProps.location !== this.props.location) {
	    // navigated!
	  }
	}
`

您可以提供位置而不是字符串到导航的各个地方：

	Web Link to
	Native Link to
	Redirect to
	history.push
	history.replace

通常您只需使用一个字符串，但如果您需要添加一些“位置状态”，只要应用程序返回到该特定位置，就可以使用位置对象。如果您想基于导航历史而不仅仅是路径（如模态）分支UI，这很有用。

`
	// 最常用的
	<Link to="/somewhere"/>

	// but you can use a location instead
	const location = {
	  pathname: '/somewhere'
	  state: { fromDashboard: true }
	}

	<Link to={location}/>
	<Redirect to={location}/>
	history.push(location)
	history.replace(location)

`

最后，您可以将location传递给以下组件：

	Route  https://reacttraining.com/web/api/Route/location
	Switch	https://reacttraining.com/web/api/Route/location


match

匹配对象包含有关<Route path>如何匹配URL的信息。匹配对象包含以下属性：	

	params - （object）从对应于路径的动态段的URL解析的键/值对
	isExact - （boolean）true如果整个URL匹配（没有尾随字符
	path - （string）用于匹配的路径模式。作用于构建嵌套的<Route>
	url - （string）URL的匹配部分。作用于构建嵌套的<Link> s

可以在以下地方访问匹配对象：

	Route component as this.props.match
	Route render as ({ match }) => ()
	Route children as ({ match }) => ()
	withRouter as this.props.match
	matchPath as the return value

如果路由没有路径，因此始终匹配，您将获得最接近的父级匹配。与Router一样。


matchPath

这允许您使用除了正常渲染循环之外的<Route>使用相同的匹配代码，例如在服务器上渲染之前收集数据依赖关系。

`
	import { matchPath } from 'react-router'

	const match = matchPath('/users/123', {
	  path: '/users/:id',
	  exact: true,
	  strict: false
	})
`	

- pathname

第一个参数是要匹配的路径名。如果在Node.js的服务器上使用这个，那么它将是req.url。

- props

第二个参数是匹配的道具，它们与匹配props相同route接受：

`
	{
	  path, // like /users/:id
	  strict, // optional, defaults to false
	  exact // optional, defaults to false
	}
`

withRouter

您可以通过withRouter高阶组件访问历史对象的属性和最接近的<Route>的匹配。随着路由每次路由改变时，路由器会重新渲染其组件，路径与<路径>渲染道具：{match，location，history}相同。

`
	import React from 'react'
	import PropTypes from 'prop-types'
	import { withRouter } from 'react-router'

	// A simple component that shows the pathname of the current location
	class ShowTheLocation extends React.Component {
	  static propTypes = {
	    match: PropTypes.object.isRequired,
	    location: PropTypes.object.isRequired,
	    history: PropTypes.object.isRequired
	  }

	  render() {
	    const { match, location, history } = this.props

	    return (
	      <div>You are now at {location.pathname}</div>
	    )
	  }
	}

	// Create a new component that is "connected" (to borrow redux
	// terminology) to the router.
	const ShowTheLocationWithRouter = withRouter(ShowTheLocation)
`

重要的提示

如果您使用withRouter来阻止更新被shouldComponentUpdate阻止，那么重要的是使用Router打包实现shouldComponentUpdate的组件。例如，使用Redux时

`
	// This gets around shouldComponentUpdate
	withRouter(connect(...)(MyComponent))
	// This does not
	connect(...)(withRouter(MyComponent))
`

有关详细信息，请参阅本指南。 https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md


静态方法和属性

包装组件的所有非反应特定静态方法和属性将自动复制到“已连接”组件。


Component.WrappedComponent

被包装的组件在返回的组件上作为静态属性WrappedComponent公开，可以用于单独测试组件。

`
	// MyComponent.js
	export default withRouter(MyComponent)

	// MyComponent.test.js

	import MyComponent from './MyComponent'
	render(<MyComponent.WrappedComponent location={{...}} ... />)
`

wrappedComponentRef: func

将作为参考传递给包装组件的函数。

`
	class Container extends React.Component {
	  componentDidMount() {
	    this.component.doSomething()  
	  }

	  render() {
	    return (
	      <MyComponent wrappedComponentRef={c => this.component = c}/>
	    )
	  }
	}
`












































