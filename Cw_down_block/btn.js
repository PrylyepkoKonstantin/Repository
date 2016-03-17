function animate() {
	var top = parseInt(block.style.top);
		if (top + size > document.documentElement.clientHeight) {
		top = - size;
	}
		block.style.top = top + 1 + 'px';
	}

function newBlock() {
		div = document.createElement('div');
		div.className = 'block';
		var leftOb = + Math.random() * 690 +50;
		div.style.left = leftOb + 'px';
		div.style.backgroundColor = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
		div.style.top = -size + 'px';
		document.body.appendChild(div);
	}

	var timerId;
	var size = 60;
	
	var btnStart = document.querySelector('.btn');
	var btnHighSpeed = document.querySelector('.btn1');
	var btnLowSpeed = document.querySelector('.btn2');
	var btnPlus = document.querySelector('.btn3');
	var btnStop = document.querySelector('.btn4');


		var block = document.querySelectorAll('.block');
		for (i=1; i < block.length-1; i++) {
			block.style.top = -size + 'px';
			block.style.left = (+ Math.random() * 690 + 50) + 'px';
		}
				
/////////////////////////////////////////////////////////////////////////////////

		btnStart.addEventListener('click', function() {
			if (!timerId) {
			timerId = 1;
		}
		for (i=1; i < block.length-1; i++) {
			timerId = setInterval(animate, 50);
		}
		}, false);

		
		btnHighSpeed.addEventListener('click', function() {
			if (!timerId) {
			timerId = 1;
		}
		for (i=1; i < block.length-1; i++) {
			clearInterval(timerId);
			timerId = setInterval(animate, 20);
			}
		}, false);

		btnLowSpeed.addEventListener('click', function() {
			if (!timerId) {
			timerId = 1;
		}
		for (i=1; i < block.length-1; i++) {
			clearInterval(timerId);
			timerId = setInterval(animate, 200);
			}
		}, false);

		
		btnPlus.addEventListener('click', function() {
			newBkock = newBlock();
			timerId = setInterval(animate, 50);
		}, false);


		btnStop.addEventListener('click', function() {
			if (!timerId) {
			timerId = 1;
		}
		for (i=1; i < block.length-1; i++) {
			clearInterval(timerId);
			}
		}, false);