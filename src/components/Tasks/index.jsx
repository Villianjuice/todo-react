import React from 'react'

import './Tasks.scss'

import Pencle from '../../assets/img/Pencle.svg'

const Tasks = () => {
  return (
    <div className="tasks">
        <h1>Фронтенд <img src={Pencle} alt="Pence"/></h1>
        <div className="tasks__item">
            <div className="checkbox">
                <input id='input' type="checkbox" />
                <label htmlFor="input">
                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                </label>
            </div>
            <p className="tasks__text">ReactJS Hooks (useState, useReducer, useEffect и т.д.)</p>
        </div>
        
    </div>
  )
}

export default Tasks;