import React from 'react'
import classNames from 'classnames'
import './List.scss'
import Badge from '../Badge'

import CloseBtn from '../../assets/img/x.svg'

const List = ({items, isRemovable, onClick, removeList}) => {

  const confirmRemove = (item) => {
    if(window.confirm('Вы уверены, что хотите удалить список?')){
      removeList(item)
    }
  }

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => 
        <li key={index} className={classNames(item.className, {'active' : item.active})}>
          <i>
            {item.icon ? item.icon : <Badge color={item.color}/>}
          </i>
          <span>{item.name}</span>
          {isRemovable && 
          <img src={CloseBtn} alt="close btn" className='list__btn-close' onClick={() => confirmRemove(item)}/>}
        </li>
      )}
        
    </ul>
  )
}

export default List