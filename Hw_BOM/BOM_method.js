function animate() {
	var top = parseInt(block.style.top, 10);
		if (top + size > document.documentElement.clientHeight) {
		top = - size;
	}
		block.style.top = top + 1 + 'px';
	}

	var timerId;

	var btnDisplProp = document.querySelector('.btn1');
	var btnOpenNW = document.querySelector('.btn2');
	var btnNewWinInItslf = document.querySelector('.btn3');
	var btnResizeNW = document.querySelector('.btn4');
	var btnReduceCW = document.querySelector('.btn5');
	var btnScrollNW = document.querySelector('.btn6');
	var btnScrollCW = document.querySelector('.btn7');
	var btnGiveFocus = document.querySelector('.btn8');
	var btnClosePrint = document.querySelector('.btn9');

		
		btnOpenNW.addEventListener('click', function() {
			OpenNW = window.open("http://www.yandex.ua");
		}, false);

		btnResizeNW.addEventListener('click', function() {
			NewWinInItslf.resizeTo(500, 500);
			NewWinInItslf.focus();
		}, false);

		btnReduceCW.addEventListener('click', function() {
			window.resizeBy(350, 350);
		}, false);

		btnScrollNW.addEventListener('click', function() {
			NewWinInItslf.scrollBy(100, 1000);
			NewWinInItslf.focus();
		}, false);

		btnScrollCW.addEventListener('click', function() {
			window.scrollTo(250, 250);
		}, false);

		btnClosePrint.addEventListener('click', function() {
			NewWinInItslf.close();
			print();
		}, false);




		btnNewWinInItslf.addEventListener('click', function() {
			NewWinInItslf = window.open("", "MsgWindow", "width=200, height=100");
			NewWinInItslf.document.write ("<h3>" + "Свойства объекта Window" + "<h3>" 
				+ "<table>"
				+ "<tbody>"
				+ "<tr>" 
					+ "<th>" + "Свойство" + "</th>" 
					+ "<th>" + "Описание" + "</th>" 
				+ "</tr>"
				+ "<tr>"
					+ "<td>closed</td>"
					+ "<td>" + "Возвращает логическое значение, указывающее закрыто окно или открыто." + "</td>"
				+ "</tr>"

				+ "<tr>"
					+ "<td>document</td>"
					+ "<td>Возвращает объект Document текущего окна.</td>"
				+ "</tr>"
				+ "<tr>"
						+ "<td>frames</td>"
						+ "<td>Возвращает массив со всеми элементами текущего окна.</td>"
					+ "</tr>"
				+ "<tr>"
					+ "<td>history</td>"
					+ "<td>Возвращает ссылку на объект History.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>innerHeight</td>"
					+ "<td>Возвращает высоту области просмотра окна.</td>"
				+ "</tr>"

				+ "<tr>"
					+ "<td>innerWidth</td>"
					+ "<td>Возвращает ширину области просмотра окна.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>lenght</td>"
					+ "<td>Возвращает количество элементов в окне.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>location</td>"
					+ "<td>Возвращает ссылку на объект Location.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>name</td>"
					+ "<td>Задает или получает значение, указывающее имя окна.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>navigator</td>"
					+ "<td>Возвращает ссылку на объект Navigator.</td>"
				+ "</tr>"				
				+ "<tr>"
					+ "<td>opener</td>"
					+ "<td>Задает или получает ссылку на окно, которое было создано в текущем окне.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>outerHeight</td>"
					+ "<td>Возвращает внешнюю высоту окна, включая панели инструментов и полосы прокрутки.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>outerWidth</td>"
					+ "<td>Возвращает внешнюю ширину окна, включая панели инструментов и полосы прокрутки.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>pageXOffset</td>"
					+ "<td>Возвращает количество пикселей, на которое текущий документ был прокручен (по горизонтали) от верхнего левого угла окна.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>pageYOffset</td>"
					+ "<td>Возвращает количество пикселей, на которое текущий документ  был прокручен (по вертикали) от верхнего левого угла окна.</td>"
				+ "</tr>"						
				+ "<tr>"
					+ "<td>parent</td>"
					+ "<td>Возвращает родительское окно текущего окна.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>screen</td>"
					+ "<td>Возвращает ссылку на объект Screen, связанный с окном.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>screenLeft</td>"
					+ "<td>Получает x-координату верхнего левого угла окна относительно верхнего левого угла экрана.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>screenTop</td>"
					+ "<td>Получает y-координату верхнего угла окна, по отношению к верхней части экрана.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>scrollX</td>"
					+ "<td>Эквивалент свойства pageXOffset.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>scrollY</td>"
					+ "<td>Эквивалент свойства pageYOffset.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>self</td>"
					+ "<td>Извлекает ссылку на текущее окно или фрейм.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>status</td>"
					+ "<td>Получает/устанавливает текст в строке состояния в нижней части браузера.</td>"
				+ "</tr>"		
				+ "</tbody></table>");
		}, false);



		btnDisplProp.addEventListener('click', function() {
			document.write("<h3>" + "Свойства объекта Window" + "<h3>" 
				+ "<table>"
				+ "<tbody>"
				+ "<tr>" 
					+ "<th>" + "Свойство" + "</th>" 
					+ "<th>" + "Описание" + "</th>" 
				+ "</tr>"
				+ "<tr>"
					+ "<td>closed</td>"
					+ "<td>" + "Возвращает логическое значение, указывающее закрыто окно или открыто." + "</td>"
				+ "</tr>"

				+ "<tr>"
					+ "<td>document</td>"
					+ "<td>Возвращает объект Document текущего окна.</td>"
				+ "</tr>"
				+ "<tr>"
						+ "<td>frames</td>"
						+ "<td>Возвращает массив со всеми элементами текущего окна.</td>"
					+ "</tr>"
				+ "<tr>"
					+ "<td>history</td>"
					+ "<td>Возвращает ссылку на объект History.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>innerHeight</td>"
					+ "<td>Возвращает высоту области просмотра окна.</td>"
				+ "</tr>"

				+ "<tr>"
					+ "<td>innerWidth</td>"
					+ "<td>Возвращает ширину области просмотра окна.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>lenght</td>"
					+ "<td>Возвращает количество элементов в окне.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>location</td>"
					+ "<td>Возвращает ссылку на объект Location.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>name</td>"
					+ "<td>Задает или получает значение, указывающее имя окна.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>navigator</td>"
					+ "<td>Возвращает ссылку на объект Navigator.</td>"
				+ "</tr>"				
				+ "<tr>"
					+ "<td>opener</td>"
					+ "<td>Задает или получает ссылку на окно, которое было создано в текущем окне.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>outerHeight</td>"
					+ "<td>Возвращает внешнюю высоту окна, включая панели инструментов и полосы прокрутки.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>outerWidth</td>"
					+ "<td>Возвращает внешнюю ширину окна, включая панели инструментов и полосы прокрутки.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>pageXOffset</td>"
					+ "<td>Возвращает количество пикселей, на которое текущий документ был прокручен (по горизонтали) от верхнего левого угла окна.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>pageYOffset</td>"
					+ "<td>Возвращает количество пикселей, на которое текущий документ  был прокручен (по вертикали) от верхнего левого угла окна.</td>"
				+ "</tr>"						
				+ "<tr>"
					+ "<td>parent</td>"
					+ "<td>Возвращает родительское окно текущего окна.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>screen</td>"
					+ "<td>Возвращает ссылку на объект Screen, связанный с окном.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>screenLeft</td>"
					+ "<td>Получает x-координату верхнего левого угла окна относительно верхнего левого угла экрана.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>screenTop</td>"
					+ "<td>Получает y-координату верхнего угла окна, по отношению к верхней части экрана.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>scrollX</td>"
					+ "<td>Эквивалент свойства pageXOffset.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>scrollY</td>"
					+ "<td>Эквивалент свойства pageYOffset.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>self</td>"
					+ "<td>Извлекает ссылку на текущее окно или фрейм.</td>"
				+ "</tr>"
				+ "<tr>"
					+ "<td>status</td>"
					+ "<td>Получает/устанавливает текст в строке состояния в нижней части браузера.</td>"
				+ "</tr>"		
				+ "</tbody></table>");
	}, false);