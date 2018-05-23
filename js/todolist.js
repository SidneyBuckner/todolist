window.setTimeout(function() {

var tasks = ["Fight evil by moonlight"];
var input = prompt("What would you like to do?");


while (input !== "quit") {
  //handle input
  if (input === "list"){
    tasks.forEach(function(todo, i) {
      alert( i + ": " + todo);
    });
  }else if (input === "new") {
    //ask for a new task
  var newtask = prompt("Enter your new task:")
    //add task to array
    tasks.push(newtask);
    alert("Your new task has been added!");
  } else if (input === "delete") {
    //ask for index of the task to be deleted
    var index = prompt("Are you sure??? Please provide the Index of the task you want to delete.");
    //remove the task
    tasks.splice(index, 1);
    alert("Done, your task has been deleted.");
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
alert("OK, quitting app. Goodbye!");

}, 500);
