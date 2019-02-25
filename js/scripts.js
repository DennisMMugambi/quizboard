$(document).ready(function(){
  var one = "";
  var two = "";
  var three = "";
  var four = "";
  var score = 0;

//sigh as you read this i couldn't find a better way.Howver i shall look into it
function userScore(score){
if(one === "1-1"){
  score = 25;
} else {
  var nothing = "";
}
if(two === "2-1"){
  score = 50;
} else {
  var nothing2 = "";
}
if(three === "3-4"){
  score = 75;
} else {
  var nothing3 = "";
}
if(four === "4-4"){
  score = 100;
} else {
  var nothing4 = "";
}
alert(score);
}
$("form.quiz").submit(function(event){
event.preventDefault;
  one = $("input:radio[name=one]:checked").val();
  two = $("input:radio[name=two]:checked").val();
  three = $("input:radio[name=three]:checked").val();
  four = $("input:radio[name=four]:checked").val();

  alert("form has been submitted successfully");
  userScore(score);
  });
});
