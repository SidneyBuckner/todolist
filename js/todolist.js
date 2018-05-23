
var tasks = ["Fight evil by moonlight"];
var input = prompt("What would you like to do?");


while (input !== "quit") {
  //handle input
  if (input === "list"){
    alert(tasks);
  }else if (input === "new") {
    //ask for a new task
  var newtask = prompt("Enter your new task:")
    //add task to array
    tasks.push(newtask);
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
alert("OK, quitting app. Goodbye!");
