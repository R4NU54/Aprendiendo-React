import { useState } from 'react'

import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
  const [Counter, setCounter] = useState(value)

  const handleSubstract = () => setCounter(Counter - 1)
  const handleReset = () => setCounter(value)
  const handleAdd = () => setCounter(Counter + 1)

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{Counter}</h2>
      <button onClick={handleSubstract}> -1 </button>
      <button onClick={handleReset}> Reset </button>
      <button onClick={handleAdd}> +1 </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
