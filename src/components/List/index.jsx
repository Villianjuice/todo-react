import React from 'react'
import axios from 'axios'

import classNames from 'classnames'
import './List.scss'
import Badge from '../Badge'

import btnClose from '../../assets/img/Vector.svg'


const List = ({items, isRemovable, onClick, removeList}) => {

  const removeConfirm = (item) => {
    if (window.confirm('Вы уверены, что хотите удалить список?')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        removeList(item.id)
      })
    }
  }
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => 
        <li key={index} className={classNames(item.className, {'active' : item.active})}>
          <i>
            {item.icon ? item.icon : <Badge color={item.color.name}/>}
          </i>
          <span>{item.name}</span>
          {isRemovable && <img onClick={() => removeConfirm(item)} src={btnClose} alt='btn close' className='list__close-icon'/>}
          
        </li>
      )}
        
    </ul>
  )
}

export default List