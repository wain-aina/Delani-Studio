$(document).ready(function(){
  $(".design").click(function() {
    $("#design, .design").toggle("slow");
  });
  $("#design").click(function() {
    $(".design, #design").toggle("slow");
  });
  $(".development").click(function() {
    $("#development, .development").toggle("slow");
  });
  $("#development").click(function() {
    $(".development, #development").toggle("slow");
  });
  $(".product-mgt").click(function() {
    $("#product-mgt, .product-mgt").toggle("slow");
  });
  $("#product-mgt").click(function() {
    $(".product-mgt, #product-mgt").toggle("slow");
  });
  $('.work1').mouseover(function() {
   $('.work1-overlay').show();
 }).mouseout(function() {
   $('.work1-overlay').hide();
 });
 $(".work2").mouseenter(function() {
   $(".work2-overlay").show();
 }).mouseleave(function() {
   $(".work2-overlay").hide();
 });
 $(".work3").mouseenter(function() {
   $(".work3-overlay").show();
 }).mouseleave(function() {
   $(".work3-overlay").hide();
 });
 $(".work4").mouseenter(function() {
   $(".work4-overlay").show();
 }).mouseleave(function() {
   $(".work4-overlay").hide();
 });
 $(".work5").mouseenter(function() {
   $(".work5-overlay").show();
 }).mouseleave(function() {
   $(".work5-overlay").hide();
 });
 $(".work6").mouseenter(function() {
    $(".work6-overlay").show();
  }).mouseleave(function() {
    $(".work6-overlay").hide();
  });
  $(".work7").mouseenter(function() {
    $(".work7-overlay").show();
  }).mouseleave(function() {
    $(".work7-overlay").hide();
  });
  $(".work8").mouseenter(function() {
    $(".work8-overlay").show();
  }).mouseleave(function() {
    $(".work8-overlay").hide();
  });
