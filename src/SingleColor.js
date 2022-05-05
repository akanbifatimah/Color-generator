import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert, setAlert] = useState(false)
  console.log(rgb)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`;

  useEffect(()=>{
    const timeout = setTimeout(()=>{

      setAlert(false)
    },2000)
    return () => clearTimeout(timeout)
  },[alert])
  // const hex = rgbToHex(...rgb)
  return( <article 
    className={`color ${index > 9 && `color-light`} `}
  style={{backgroundColor: `rgb(${bcg})`}}>
   
    <p className='percent-value'>{weight}%</p>
     <button className='color-value btn'
     onClick={()=>{
       setAlert(true)
       navigator.clipboard.writeText(hexValue)
     }}>{hexValue}</button>
     {alert && <p className='alert'>copied to clipboard</p>}
  </article>
  )
}
export default SingleColor
