$(document).ready(function(){
$("form.quiz").submit(function(event){
event.preventDefault;
var score = "";
$("input [radio="#1-1"]:checked").click(function(){
  score = 1;
  alert("correct");
});
$("input #2-1").click(function(){
  score += 1;
  alert("correct");
});
$("input #3-3").click(function(){
  score += 1;
  alert("correct");
});
$("input #4-4").click(function(){
  score += 1;
  alert("correct");
});
alert("form has been submitted successfully");
});
});
