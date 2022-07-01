import React, { useEffect, useState } from 'react';
import './Counter.css'

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
    setCurrentCount(currentCount + props.decrementBy)
  }

  useEffect(() => {
    if (currentCount === 0) {
      setCurrentCount(240)
    }
  }, [currentCount])
  
  return (
    <div>
      <button onClick={handleClick}>Pour Beer</button>
      <div className='count-display'>{currentCount}</div>
    </div>
  )
}

export default CountButton