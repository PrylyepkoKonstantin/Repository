var mas = [10,2,13,4,0,6,97,0,59];

function zeroDelete(arr) {
  
for (var i =0; i < arr.length; i++) {
    if (arr[i] === 0) {
    arr.splice(i,1);
    }
}
  return arr;
}

alert(zeroDelete(mas));