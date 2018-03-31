$(function () {
let people = {
  "John McLean":{
     "age":34,
     "experience":12
  },
  "Adam Luis":{
     "age":45,
     "experience":5
  },
  "Oleg Petrenko":{
     "age":25,
     "experience":7
  },
  "Natalia Ostroverh":{
     "age":38,
     "experience":10
  },
  "Olya Ostroverh":{
     "age":36,
     "experience":10
  },
  "Olya Tinkoff":{
     "age":55,
     "experience":21
  },
  "Anton Antonov":{
     "age":25,
     "experience":22
  },
  "Oleg Tynov":{
     "age":18,
     "experience":1
  }
}
var arrPeople = [];
$.each(people,function(i,item) {
  item.name = i;
  arrPeople.push(item);
});
// ______________ Сортировка ____________
function sortFunction() {
    arrPeople.sort(function(a, b){
      return (a.age - b.experience) - (a.experience - b.age)
    });
}
sortFunction();
console.log(arrPeople);
console.log("-------Сортировка-------");
// _______________________Фильтрация по стажу работы __________________
// ___________________ Фильтрация по возрасту до 30 и после 30 _________
var arrFilterExp = [];
var arrFilter30 = [];
var arrFilter29 = [];
function filterFunction() {
  for(let i = 0; i < arrPeople.length; i++){
    if(arrPeople[i].experience < 6){
      arrFilterExp.push(arrPeople[i]);
    }
    (arrPeople[i].age > 30) ? arrFilter30.push(arrPeople[i]) : arrFilter29.push(arrPeople[i]);
  }
}
filterFunction();
console.log(arrFilterExp);
console.log("-------Фильтрация по стажу работы до 6 лет --------");
console.log(arrFilter30);
console.log("-------Фильтрация по возрасту до 30--------");
console.log(arrFilter29);
console.log("-------Фильтрация по возрасту после 30-----------");

// -------Фильтрация по возрасту от 30 до 40 -----------
var arrFor30To40 = [];
function filterForTo() {
  for(var i = 0; i < arrPeople.length; i++){
    if(arrPeople[i].age > 30 && arrPeople[i].age < 40) {
      arrFor30To40.push(arrPeople[i]);
    }
  }
};
filterForTo();
console.log(arrFor30To40);
console.log("-------Фильтрация по возрасту от 30 до 40 -----------");
});
