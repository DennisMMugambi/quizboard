$(document).ready(function(){


$("form.quiz").submit(function(event){
event.preventDefault;
var one = $("input:radio[name=one]:checked").val();
var two = $("input:radio[name=two]:checked").val();
var three = $("input:radio[name=three]:checked").val();
var four = $("input:radio[name=four]:checked").val();

alert(one);
alert(two);
alert(three);
alert(four);
alert("form has been submitted successfully");

});
});
