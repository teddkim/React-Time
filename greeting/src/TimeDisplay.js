import React from 'react'
import './TimeDisplay.css'

const timeConfig = {
  morning: {
    text: 'Good morning!',
    iconName: 'sun outline'
  },
  afternoon: {
    text: 'Good Afternoon!',
    iconName: 'sun outline'
  },
  evening: {
    text: 'Good Evening!',
    iconName: 'moon outline'
  },
  night: {
    text: 'Good night!',
    iconName: 'moon outline'
  }
}

const getGreeting = (hour) => {
  if (hour > 2 && hour <= 12) {
    return 'morning'
  } else if (hour > 12 && hour <= 17) {
    return 'afternoon'
  } else if (hour > 17 && hour <= 20) {
    return 'evening'
  } else if (hour > 20 || hour <= 2) {
    return 'night'
  }
}

const TimeDisplay = props => {
  const greeting = getGreeting(props.hour)
  const {text, iconName} = timeConfig[greeting]

  return (
    <h2 className={`time-display ui center aligned icon header ${greeting}`}>
      <i className={`${iconName} icon`} />
      {text}
    </h2>
  )
}

export default TimeDisplay
