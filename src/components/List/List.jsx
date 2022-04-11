import React from 'react'
import './List.scss'

const List = ({items}) => {
  return (
    <ul className="list">
      {items.map(item => 
        <li className={item.active ? 'active' : ''}>
          <i>
            {item.icon ? item.icon : <div className={`badge badge__${item.color}`}></div>}
          </i>
          <span>{item.title}</span>
        </li>
      )}
        
    </ul>
  )
}

export default List