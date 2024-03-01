import React from 'react'

const Tag = ({ tag, color }) => {
    let bgcol
    let textcol
    if (color === "orange") {
        bgcol = 'bg-yellow-900'
        textcol = '[#faa356]'
    } else if (color === 'blue') {
        bgcol = 'bg-blue-950'
        textcol = '[#a2d2fb]'
    } else {
        bgcol = 'bg-white'
        textcol = 'black'
    }

    return (
      <div className={`dark:${bgcol} bg-gray-300 dark:text-${textcol} text-gray-900 w-fit h-fit rounded-md px-1 text-sm`}>
        <p className='font-bold'>{tag}</p>
      </div>
    )
}

export default Tag