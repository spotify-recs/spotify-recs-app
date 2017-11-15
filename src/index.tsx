import * as React from "react"
import * as ReactDOM from "react-dom"

import Header from "./components/Header"
import Main from "./components/Main"
import "./stylesheets/normalize.scss"
import "./stylesheets/main.scss"

const Root: React.StatelessComponent<null> = () => {
	return (
		<div id="app-container">
			<Header />
			<Main />
		</div>
	)
}

ReactDOM.render(<Root/>, document.getElementById("root"))