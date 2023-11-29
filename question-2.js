// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

userTaskList.push({id: 5 ,task: "Walk the dog"})
  userTaskList[3]= {id: 4  ,task:"Go to the gym"}
  userTaskList.pop();
  let lastTask = userTaskList[3]
  console.log(`Task : ${lastTask.id},${lastTask.task}`);