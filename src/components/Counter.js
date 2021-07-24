import { useState, useMemo, memo, forwardRef } from 'react'

// function getCount() {
//   console.log('expensive')
//   return Array(100000)
//     .fill(1)
//     .reduce((acc, cur) => acc + cur, 0)
// }

// function Counter() {
//   const [count, setCount] = useState(() => getCount())

//   const handleClick = () => {
//     setCount((previousCount) => previousCount + 1)
//   }

//   return (
//     <section>
//       <span>{count}</span>
//       <button onClick={handleClick}>Plus 1</button>
//     </section>
//   )
// }

function getCount(fillNumber) {
  console.log('An expensive work is been executing...')

  return Array(100000)
    .fill(fillNumber)
    .reduce((acc, cur) => acc + cur, 0)
}

// const a = {
//   teacher: 'john',
//   mother: 'emily',
//   // 변화의 가능성
// }
// const b = {
//   teacher: 'john',
//   mother: 'emily',
// }
// a === b // shallow compare

function isSameObject(first, second) {
  // return Object.entries(first).every(([key, value]) => {
  //   if (value === second[key]) {
  //     return true
  //   }
  // })
  return JSON.stringify(first) === JSON.stringify(second)
}
// console.log(isSameObject(a, b))

// function Counter({ fillNumber }) {
//   const [text, setText] = useState('')
//   const sum = useMemo(() => getCount(fillNumber), [fillNumber])

//   return (
//     <section>
//       <span>Sum: {sum}</span>
//       <input value={text} type="text" onChange={event => setText(event.target.value)} />
//     </section>
//   )
// }

const Counter = forwardRef(({ fillNumber }, ref) => {
  const [text, setText] = useState('')
  const sum = useMemo(() => getCount(fillNumber), [fillNumber])

  return (
    <section>
      <span>Sum: {sum}</span>
      <input value={text} ref={ref} type="text" onChange={event => setText(event.target.value)} />
    </section>
  )
})

Counter.displayName = 'Counter'

export default memo(Counter, (prevProps, nextProps) => {
  return isSameObject(prevProps, nextProps)
})
