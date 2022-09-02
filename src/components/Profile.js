import React from 'react'
import {useSelector} from "react-redux"

function Profile() {
  const user = useSelector((state) => state.user.value)
  const darkTheme = useSelector((state) => state.theme.value)

  const color = darkTheme ? "#fff" : "#000"

  return (
    <div>
        <h1 style={{ color: color}}>Profile Page</h1>
        <p style={{ color: color}}>Name: {user.name}</p>
        <p style={{ color: color}}>Age: {user.age}</p>
        <p style={{ color: color}}>Email: {user.email}</p>
    </div>
  )
}

export default Profile