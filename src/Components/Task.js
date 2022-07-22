const Task = ({ text, tasks, setTasks, linkCheck }) => {

  const handleDelete = () => {
    setTasks(tasks.filter((tasks) => tasks !== text))
    linkCheck()
  }

  return (
    <div>
      <li> {text} <button className="li-button" onClick={handleDelete}> X </button> </li>

    </div>
  )
}
export default Task;