import React from 'react'
import '../style.css'

function MyInfo () {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = 'morning'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'night'
  }

  return (
    <h3>Good {timeOfDay}</h3>
  )
}


export default MyInfo