import React from 'react'
import './style.css'
import Touch from './touch'
class App extends React.Component{
	constructor(props) {
		super(props)
	}
	render() {
		var eventSign = {
			long : function () {
				console.log('long')
			},
			right : function () {
				console.log('right')
			},
			left : function () {
				console.log('left')
			},
			down : function () {
				console.log('down')
			},
			up : function () {
				console.log('up')
			},
			tap : function () {
				console.log('tap')
			},
		}
		return(
			<Touch
				{...eventSign}
				>
				<div style={{height:"400px",background:"rgb(255,243,151)"}}></div>
			</Touch>
		)
	}
}
export default App
