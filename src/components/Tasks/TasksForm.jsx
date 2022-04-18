import axios from 'axios'
import React, { useState } from 'react'

import AddIcon from '../../assets/img/Add.svg'


const TasksForm = ({list, onAddTask}) => {
    const [formVisible, setFormVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const switchFrom = () => {
        setFormVisible(!formVisible)
        setInputValue('')
    }
    const addTask = () => {
        const newtask = {
            listId: list.id,
            text: inputValue,
            completed: false
        }
        axios.post('http://localhost:3001/tasks', newtask).then(({data}) => onAddTask(list.id, data))
        setFormVisible(false)
        setInputValue('')
    }
  return (
    <>
        {!formVisible 
        ? (
            <div onClick={switchFrom} className="tasks__form-add">
                <img src={AddIcon} alt="add icon" />
                <span>Новая задача</span>
            </div>
        ) : (
            <div className="tasks__form-block">
                <input 
                    className='field' 
                    placeholder='Текст задачи'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button onClick={addTask} className='button'>
                    Добавить задачу
                </button>
                <button className='button button-gray' onClick={switchFrom}>
                    Отмена
                </button>
            </div>
        )}
    </>
  )
}

export default TasksForm