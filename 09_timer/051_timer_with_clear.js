var i = 0;
var x = setInterval(function () {
  console.log("* ");
  i++;
  if (i > 10) {
    clearInterval(x);
  }
}, 1000);
