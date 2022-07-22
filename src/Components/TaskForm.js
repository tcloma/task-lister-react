import { useState } from "react"

const TaskForm = ({ tasks, setTasks }) => {

  const [input, setInput] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    setTasks([...tasks, input])
  }

  const getInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <form>
        <label> Task Description: </label>
        <input type='text' placeholder='Enter new task' onChange={getInput} />
        <button onClick={handleClick}>Add new task</button>
      </form>
    </div>
  )
}
export default TaskForm;