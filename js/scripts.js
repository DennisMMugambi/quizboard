$(document).ready(function(){


$("form.quiz").submit(function(event){
event.preventDefault;
var one = $("input:radio[name=one]:checked").val();
var two = $("input:radio[name=two]:checked").val();
var three = $("input:radio[name=three]:checked").val();
var four = $("input:radio[name=four]:checked").val();

var score =""

if(one === "Javascript is a web scripting language" && two === "var varName" && three === "alert" && four === "func();"){
  score = 100;
} else if (one === "Javascript is a web scripting language" || two === "var varName"){
  score = 25;
} else if (three === "alert" || four === "func();"){
  score = 25;
} else if (one === "Javascript is a web scripting language" && two === "var varName"){
  score = 50;
} else if (three === "alert" && four === "func();"){
  score = 50;
}
alert("form has been submitted successfully");
alert(score);
});
});
