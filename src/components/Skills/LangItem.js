import React from 'react'

const LangItem = (props) => {

  const fluencyColor = (level) => {
    if (level >= 66) {
      return "highFluency"
    } else if (level >= 33 && level < 66) {
      return "midFluency"
    } else if (level < 33) {
      return "lowFluency"
    }
  }

  return (
    <li className={`${fluencyColor(props.level)}`}>
      <p>
        <span>{props.name}</span> - <span>{props.fluency}</span>
      </p>
      <p className="chivo langDesc">{props.desc}</p>
    </li>
  )
}

export default LangItem