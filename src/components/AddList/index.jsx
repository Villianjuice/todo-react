import React, { useState } from 'react'
import Badge from '../Badge'
import List from '../List'

import './AddList.scss'

import closeBtn from '../../assets/img/CloseBtn.svg'

const AddList = ({colors, onAdd}) => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [selectedColor, selectColor] = useState(colors[0].id)

  const [inputValue, setInputValue] = useState('')

  const btnClose = () => {
    setVisiblePopup(false);
    setInputValue('')
    selectColor(colors[0].id)
  }

  const addList = () => {
    if(!inputValue) {
      alert('Введите список!')
      return
    }
      const color = colors.find(c => c.id === selectedColor).name
      const newList = { id: Math.random(), name: inputValue, colorId: selectedColor, color};
      onAdd(newList)

      btnClose()
  }

  return (
   <div className='add-list'>
        <List onClick={() => setVisiblePopup(true)} items={[
        {
          className: 'list-add__button',
          icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>,
          name: 'Добавить список'
        }
        ]}/>
        {visiblePopup && (
          <div className='add-list__popup'>
            <img onClick={btnClose} className='add-list-close' src={closeBtn} alt='close btn'/>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} className='field' placeholder='Название списка'></input>
            <ul className='add-list__popup-color'>
             {colors.map(color => 
              <li key={color.id}><Badge onClick={() => selectColor(color.id)}  color={color.name} className={selectedColor === color.id && 'active'}/></li>
             )}
            </ul>
            <button onClick={addList} className='button'>Добавить</button>
        </div>
        )}
   </div>
  )
}

export default AddList