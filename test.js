
function hello(callback) {
  console.log("hello");
  callback();
}

function leave() {
  console.log("leave!");
}

function goodbye() {
  console.log("good bye");
}

hello(leave);
