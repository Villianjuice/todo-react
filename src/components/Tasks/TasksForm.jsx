import React, { useState } from 'react'
import TaskAdd from '../../assets/img/Add.svg'

const TasksForm = ({addTask, list}) => {
    const [formVisible, setFormVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const toogleFormVisible = () => {
        setFormVisible(!formVisible)
        setInputValue('')
    }

    const addTasks = () => {
        const newTask = {
            listId: list.id,
            text: inputValue,
            completed: false
        }
        addTask(list.id, newTask)
        toogleFormVisible()
    }

  return (
    <div className="tasks__form">
        {!formVisible 
        ?
        (<div onClick={toogleFormVisible} className="tasks__form-new" >
            <img src={TaskAdd} alt="TaskAdd" />
            <span>Новая задача</span>
        </div>) 
        : 
        (<div className="tasks__form-block">
            <input 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className='field' 
                placeholder='Текст задачи'>
            </input>
            <button onClick={addTasks} className='button'>
                Добавить задачу
            </button>
            <button onClick={toogleFormVisible} className='button button__gray'>
                Отмена
            </button>
        </div>)}
        
    </div>
  )
}

export default TasksForm