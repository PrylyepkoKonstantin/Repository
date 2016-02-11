// var ask = parseInt(prompt('Какая температура твоего тела?'));
// if (ask !== "number") {alert ("Это не температура...");
//     }
        

// else if (ask < 35){
// 			alert("Ты труп... Sorry(((");
// 			} else if (ask > 35 && ask < 37){
// 				alert("Ты здоров иди работай!!!");
// 				} else if (ask > 37 && ask < 40){
// 					alert("Ты очень болен!!!");
// 					} else if (ask > 40 && ask < 42){
// 						alert("Ты в коме!!!");
// 						} else if (ask > 42){
// 							alert("Да ты Агонь!!!");
//                         }


// do {alert ("Это не температура");
// 	var ask = parseInt(prompt('Какая температура твоего тела?'));
// }
// while (ask != "number") {
  
//     if (ask < 35){
// 			alert("Ты труп... Sorry(((");
// 			} else if (ask > 35 && ask < 37){
// 				alert("Ты здоров иди работай!!!");
// 				} else if (ask > 37 && ask < 40){
// 					alert("Ты очень болен!!!");
// 					} else if (ask > 40 && ask < 42){
// 						alert("Ты в коме!!!");
// 						} else if (ask > 42){
// 							alert("Да ты Агонь!!!");
//                         }

do {var ask = +prompt('Какая температура твоего тела?');
} while (isNaN(ask));

      if (ask < 35){
			alert("Ты труп... Sorry(((");
			} else if (ask > 35 && ask < 37){
				alert("Ты здоров иди работай!!!");
				} else if (ask > 37 && ask < 40){
					alert("Ты очень болен!!!");
					} else if (ask > 40 && ask < 42){
						alert("Ты в коме!!!");
						} else if (ask > 42){
							alert("Да ты Агонь!!!");
                              }else alert('Не не!');
