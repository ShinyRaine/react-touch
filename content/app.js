import React from 'react'
import './style.css'
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			startTime : 0,
			endTime : 0,
			startX : 0,
			startY : 0,
			endX : 0,
			endY : 0,
			move : 0
		}
	}

	touchStart(e) {
		this.state.startTime = new Date()
		this.state.startX = e.touches[0].pageX
		this.state.startY = e.touches[0].pageY
	}

	touchMove(e) {
		this.state.startTime = 0
	}

	touchEnd(e) {
		console.log(e.changedTouches,e.touches)
		let endX = e.changedTouches[0].pageX
		let endY = e.changedTouches[0].pageY
		let endTime = new Date()
		let moveX = endX - this.state.startX
		let moveY = endY - this.state.startY
		let time = endTime - this.state.startTime
		if ( moveX > 50 ) {
			console.log('right')
		}else if (moveX < -50) {
			console.log('left')
		}

		if ( moveY > 50 ) {
			console.log('down')
		}else if (moveY < -50) {
			console.log('up')
		}

		if ( time < 300 ) {
			console.log('tap')
		}


	}
	render() {
		let touch = {
			onTouchStart : this.touchStart.bind(this),
			onTouchMove : this.touchMove.bind(this),
			onTouchEnd : this.touchEnd.bind(this)
		}
		return (
			<div className="content" {...touch}>
				
			</div>
		)
	}
}

export default App
	
