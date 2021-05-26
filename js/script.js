
var requestId = 0;
var animationStartTime = 0;

 var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");


    animationStartTime = window.performance.now();
  requestId = window.requestAnimationFrame(animate);
  var i=0;
  
  var str="Молодець, ти пройшов квест!!! Молодець, ти пройшов квест!!! Молодець, ти пройшов квест!!! Молодець, ти пройшов квест!!! Молодець, ти пройшов квест!!! Молодець, ти пройшов квест!!! Молодець, ти пройшов квест!!!";
  context.fillStyle = "white";
  context.font = "bold 3em Roboto";
  context.fillText(str, i+5, 100);
  var the_end=context.measureText(str).width;


  function animate(time) {
  context.fillStyle = "white";
  context.fillRect(0, 0, 1000, 300);
  context.fillStyle = "#ffe500";
  context.font = "bold 3em Roboto";
  context.fillText(str, i, 100);
  i=i-2;
    if (i==-the_end)
      {
      i=0;
      }
    requestId = window.requestAnimationFrame(animate);
}