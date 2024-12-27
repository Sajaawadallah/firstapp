import React from 'react'

export default function Button({ className, onClick, btnTilte }) {
    return (

        <button className={className} onClick={onClick}>{btnTilte}</button>

    )
}
