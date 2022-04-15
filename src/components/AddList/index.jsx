import React, { useEffect, useState } from 'react'
import Badge from '../Badge'
import List from '../List'

import './AddList.scss'

import closeBtn from '../../assets/img/CloseBtn.svg'
import axios from 'axios'

const AddList = ({colors, onAdd}) => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [selectedColor, selectColor] = useState(3)
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if(Array.isArray(colors)) {
      selectColor(colors[0].id)
    }
  }, [colors])

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    selectColor(colors[0].id);
  };

  const addList = () => {
    if(!inputValue) {
      alert('Введите список');
      return
    }
    setIsLoading(true)
    axios
    .post('http://localhost:3001/lists', {
      name: inputValue,
      colorId: selectedColor
    })
    .then(({data}) => {
      const color = colors.find(c => c.id === selectedColor).name;
      console.log(color);
      const newPost = {...data, color:{name: color} }
      onAdd(newPost)
      onClose() 
    })
    .finally(() => {
      setIsLoading(false)
    }) 
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
            <img onClick={onClose} className='add-list-close' src={closeBtn} alt='close btn'/>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} className='field' placeholder='Название списка'></input>
            <ul className='add-list__popup-color'>
             {colors.map(color => 
              <li key={color.id}><Badge onClick={() => selectColor(color.id)}  color={color.name} className={selectedColor === color.id && 'active'}/></li>
             )}
            </ul>
            <button onClick={addList} className='button'>
              {isLoading ? 'Добавление...' : 'Добавить'} 
            </button>
        </div>
        )}
   </div>
  )
}

export default AddList