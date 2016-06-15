import React from 'react'
import './style.css'

class Touch extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			startTime : 0,
			startX : 0,
			startY : 0,
			timer : null
		}
	}
  reset() {
    this.state = {
			startTime : 0,
			startX : 0,
			startY : 0,
			timer : null
		}
  }
  eventSign(type){
    if (typeof(this.props[type]) == 'function') {
      this.props[type]()
    }
  }
	touchStart(e) {
		this.state.startTime = new Date()
		this.state.startX = e.touches[0].pageX
		this.state.startY = e.touches[0].pageY
    this.state.timer = setTimeout(function () {
      this.eventSign('longtap')
    },600)
	}


	touchMove(e) {
		this.state.startTime = 0
    clearTimeout(this.state.timer)
	}

	touchEnd(e) {
		let endX = e.changedTouches[0].pageX
		let endY = e.changedTouches[0].pageY
		let endTime = new Date()
		let moveX = endX - this.state.startX
		let moveY = endY - this.state.startY
		let time = endTime - this.state.startTime
		if ( moveX > 50 ) {
			this.eventSign('right')
		}else if (moveX < -50) {
			this.eventSign('left')
		}
		if ( moveY > 50 ) {
			this.eventSign('down')
		}else if (moveY < -50) {
			this.eventSign('up')
		}
		if ( time < 300 ) {
			this.eventSign('tap')
      clearTimeout(this.state.timer)
		}
    this.reset()
	}
	render() {

		return (
      React.cloneElement(this.props.children,{
        onTouchStart: this.touchStart.bind(this),
        onTouchMove: this.touchMove.bind(this),
        onTouchEnd: this.touchEnd.bind(this),
      })
		)
	}
}

export default Touch
