import Task from "./Task";

const TaskList = ({ tasks, setTasks, linkCheck }) => {
  // console.log(tasks)
  return (
    <div id="list">
      <h2>My To-dos</h2>
      <ul id="tasks">
        {tasks.map((task, index) => {
          return (
            <Task key={index} text={task} tasks={tasks} setTasks={setTasks} linkCheck={linkCheck}/>
          )
        })}
      </ul>
    </div>
  )
}
export default TaskList;