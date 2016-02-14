var mas = [10,2,13,4,55,6,97,8,59];

function shift(arr) {
var n = arr.length;
var temp;
  for(var i = 0; i < n - i; i++) {
    temp = arr[i];
    arr[i] = arr[n-i];
    arr[n-i] = temp;
    }
  return arr;
}
alert(shift(mas));