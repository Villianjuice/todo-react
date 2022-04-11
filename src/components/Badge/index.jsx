import React from 'react'
import './Badge.scss'

import classNames from 'classnames'

const Badge = ({color, onClick, className}) => {
  return (
    <div onClick={onClick} className={classNames('badge', [`badge badge__${color}`], className)}></div>
  )
}

export default Badge