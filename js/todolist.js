window.setTimeout(function() {

var tasks = ["Fight evil by moonlight"];
var input = prompt("What would you like to do?");


while (input !== "quit") {
  //handle input
  if (input === "list"){
    listTasks();
  }else if (input === "new") {
    addToTasks();
  } else if (input === "delete") {
    //ask for index of the task to be deleted
    delTasks();
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
alert("OK, quitting app. Goodbye!");

//Refectoring below:

function listTasks() {
  tasks.forEach(function(todo, i) {
    alert( i + ": " + todo);
  });
}
function addToTasks() {
  //ask for a new task
var newtask = prompt("Enter your new task:")
  //add task to array
  tasks.push(newtask);
  alert("Your new task has been added!");
}

function delTasks() {
  var index = prompt("Are you sure??? Please provide the Index of the task you want to delete.");
  //remove the task
  tasks.splice(index, 1);
  alert("Done, your task has been deleted.");
}

}, 500);
