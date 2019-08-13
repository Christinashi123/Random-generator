var header= $(".g");
var first= $(".h");
var second= $(".j");
header.text("Choose Me!");
first.text("Choose Me!!");
second.text("Choose Me!!!");
console.log(header);
console.log(first);
console.log(second);


var buttonone=$(".buttonone");
var johnArray =["What worries you, masters you.", "No man's knowledge here can go beyond his experience.", "I have always thought the actions of men the best interpreters of their thoughts."]
buttonone.on("click", doSomething);
function doSomething() {
  console.log("click the magic");
  var random = Math.random() * johnArray.length;
  var rounded = Math.floor(random);
  var newmessage= johnArray[rounded];
  header.text(newmessage);
}

var buttontwo=$(".buttontwo");
var hobbesArray= ["In the state of nature profit is the measure of right.","The condition of man... is a condition of war of everyone against everyone."]
buttontwo.on("click", doSomething2);
function doSomething2() {
  console.log("Click Here");
  var random = Math.random()* hobbesArray.length;
  var rounded = Math.floor(random);
  var newmessages = hobbesArray[rounded];
  first.text(newmessages);
}

var buttonthree = $(".buttonthree");
var wollstonecraft = ["The beginning is always today.","I do not wish them [women] to have power over men; but over themselves.", "It is justice, not charity, that is wanting in the world."]
buttonthree.on("click", doSomething3);
function doSomething3() {
  console.log("Click Here");
  var random = Math.random()* wollstonecraft.length;
  var rounded= Math.floor(random);
  var newmessagess = wollstonecraft[rounded];
  second.text(newmessagess);
}
