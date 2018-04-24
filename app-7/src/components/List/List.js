import React from 'react'
import Todo from '../Todo/Todo'

export default function List(props) {
  const list = props.data.map((elem, i) => {
    return <Todo key={i} task={elem}/>
  })
  return(
    <div>
      {list}
    </div>
  )
}