import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {changeTheme} from "../features/theme"

export const ChangeTheme = () => {

    const dispatch = useDispatch()
  return (
    <div>
        <button style={{margin: "5px 0"}} onClick={ () => {dispatch(changeTheme())}}>Change Theme</button>
    </div>
  )
}

export default ChangeTheme