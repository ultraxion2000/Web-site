'use strict';
let q1 = 0;

let i = 0;
let name = new Array();
let surname = new Array();
function check() {
 if(document.questions.question1[0].checked) { q1 = 3 } 
 if(document.questions.question1[1].checked) { q1 = 4 } 
 if(document.questions.question1[2].checked) { q1 = 5 } 
 
  let result1 = q1;
  let number = i+1;
  writeAnswer(result1, number);
}
 function writeAnswer(result1, number) {
   name[i] = document.questions.name.value;
   surname[i] = document.questions.surname.value;
   let root = new Array();
   root[i] = document.getElementById("root");
   root[i].innerHTML += number + ". "+ "Имя: "+ name[i] + "<br>" + "Комментарий: "+ surname[i] + "" + "<br>";
   root[i].innerHTML += "<a> Оценка сайту: </a>" + result1;
   root[i].innerHTML += "<br>" + "<hr>";
   i++;
 }
