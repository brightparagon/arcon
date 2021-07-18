import { useState } from 'react'

function getCount() {
  console.log('expensive')
  return Array(100000)
    .fill(1)
    .reduce((acc, cur) => acc + cur, 0)
}

function Counter() {
  const [count, setCount] = useState(() => getCount())

  const handleClick = () => {
    setCount((previousCount) => previousCount + 1)
  }

  return (
    <section>
      <span>{count}</span>
      <button onClick={handleClick}>Plus 1</button>
    </section>
  )
}

export default Counter
