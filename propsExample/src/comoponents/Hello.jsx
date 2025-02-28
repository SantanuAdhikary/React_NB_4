import React from 'react'

const Hello = (props) => {
  return (
    <div>

        <h1> student name : {props.stu.sname}</h1>

        <h2> age is : {props.stu.sage}</h2>
    </div>
  )
}

export default Hello