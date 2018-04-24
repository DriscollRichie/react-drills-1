import React from 'react'

export default function Todo(props) {
  const list = props.data.map((elem, i) => {
    return <li key={i}>{elem}</li>
  })
  return(
    <div>
      <ul>
        {list}
      </ul>
    </div>
  )
}