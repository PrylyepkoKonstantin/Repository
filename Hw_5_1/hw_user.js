function name() {
  console.log("Привет, " + this.name + " " + this.surname + "!");
}

function age() {
  console.log("Привет, я " + this.name + " " + this.surname + "! Мне " + this.age + " лет.");
}

// var getFullYear() = god;
// var age = (god - beginning);
// var beginning = user.birth;

var user = {};
	user.name = "Иван";
	user.surname = "Иванов";
	user.birth   = 1959;
	user.age = 57;

var user2 = {};
	user2.name = "Name";
	user2.surname = "Surname";
	
///////////////////////////////////////////////////
    user.sayHello = name;
    user.sayHello();
///////////////////////////////////////////////////
    user.sayAge = age;
    user.sayAge();
///////////////////////////////////////////////////
    user2.changeName = name;
    user2.changeName();