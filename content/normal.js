var touch = function (ele,event,fun) {
	var sign = {
		startTime : 0,
		startX : 0,
		startY : 0,
		timer: null
	}
	function touchStart(e) {
		sign.startTime = new Date()
		sign.startX = e.touches[0].pageX
		sign.startY = e.touches[0].pageY
		sign.timer = setTimeout(function () {
			console.log('long')
		},600)
	}
	function touchMove(e) {
		sign.startTime = 0
		clearTimeout(sign.timer)
	}
	function touchEnd(e) {
		var endX = e.changedTouches[0].pageX
		var endY = e.changedTouches[0].pageY
		var endTime = new Date()
		var moveX = endX - sign.startX
		var moveY = endY - sign.startY
		var time = endTime - sign.startTime
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

	ele.addEventListener('touchstart',touchStart,false)
	ele.addEventListener('touchmove',touchMove,false)
	ele.addEventListener('touchend',touchEnd,false)
}