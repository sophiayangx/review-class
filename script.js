function nameLength(name) {
console.log(name.length);
};
nameLength("Sophia");


function doStuff(name) {
  console.log(name.toString())
}
doStuff(doStuff)

$("#clickme").click(function() {
  console.log("pls show up");
});

function whenClicked() {
  console.log("hihi")
  return "111"
}
$("#clickme").click(whenClicked)
