import React from 'react'
import axios from 'axios'

import './Tasks.scss'
import Pencle from '../../assets/img/Pencle.svg'
import TasksForm from './TasksForm'


const Tasks = ({list, changeTitle, addTask}) => {

    const editTitle = () => {
        const newTitle = prompt('Введите новое название', list.name )
        if(newTitle){
            changeTitle(list.id, newTitle)
            axios.patch(('http://localhost:3001/lists/' + list.id), {
                name: newTitle
            }).catch(err => console.log(err))
        }
    }
    
  return (
    <div className="tasks">
        <h1>{list.name} <img onClick={editTitle} src={Pencle} alt="Pence"/></h1>
        
        {!list.tasks.length && <h2>Задачи отсутствуют</h2>}
        {list.tasks.map(task => 
            
            <div key={task.id} className="tasks__items">
                <div className="tasks__row">
                    <div className="checkbox">
                        <input id={'task-' + task.id} type="checkbox" />
                        <label htmlFor={'task-' + task.id}>
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        </label>
                    </div>
                    <input type="text" readOnly value={task.text} />
                </div>
            </div>
        )}
        <TasksForm addTask={addTask} list={list}/>
        
    </div>
  )
}

export default Tasks;