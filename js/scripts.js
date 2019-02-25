$(document).ready(function(){
  var one = "";
  var two = "";
  var three = "";
  var four = "";
  var score = 0;

function userScore(score){

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
