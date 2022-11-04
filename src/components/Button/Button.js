import React from 'react'
import './Button.css'

export const ContainedButton = ({ text }) => {
    return (
        <button className='button contained-button'>{text}</button>
    )
}

export const OutlinedButton = ({ text }) => {
    return (
        <button className='button outlined-button'>{text}</button>
    )
}


