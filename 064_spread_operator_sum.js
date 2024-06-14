// find sum with spread operator
function sum(...a) {
  var s = 0;
  a.forEach(function (num) {
    s = s + num;
  });
  return s;
}
                              