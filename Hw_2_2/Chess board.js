var line = +prompt('Введите количество строк', 'Число');
var cell = +prompt('Введите количество ячеек', 'Число');
var str = '<table border="1">';

for (var i=1; i<=line; i++) {
  str += '<tr>';
  for (var j=1; j<=cell; j++) {
  if ((i+j)%2===0) {
   str += '<td style="background-color:black;"> Строка ' + i + ', столбец ' + j + '</td>';
  }
    else {
    str += '<td>Строка ' + i + ', столбец ' + j + '</td>';
      }
  } 
  str += '</tr>';
}
str += '</table>';
document.write(str);