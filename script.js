//function(arg 1)
var greeting = function(name) {
console.log("Hi my name is" + " " + name);
};

greeting("Sophia");

//jquery function
$("#button").click(function() {
  console.log("hihi");
});


//function(arg1, arg2)
var perimeter = function(length, width) 
{
  console.log(length + length + width + width);
};

perimeter(3,5);

//if statement
if (4%2===0) {
console.log("noice");
}
  
else {
console.log("darn");
};

//for loops
for (var i = 1; i < 11; i = i + 1) {
  console.log(i);
}

var list = [1,2,3,4]