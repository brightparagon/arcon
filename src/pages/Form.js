import { useEffect, useState } from 'react'

const selectableItems = [
  'apple',
  'melon',
  'strawberry',
  'pineapple',
  'blueberry',
]
const defaultSelectedValue = selectableItems[0]

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(email)
}

const Form = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [fruit, setFruit] = useState(defaultSelectedValue)
  const [error, setError] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name)
    console.log(phoneNumber)
    console.log(email)
    console.log(text)
    console.log(fruit)
  }

  // useEffect(() => {
  //   // validation
  //   if (name) {

  //   }
  // }, [name])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={name}
        style={{ border: error !== null ? '1px solid red' : null}}
        onChange={(event) => {
          // validation
          const value = event.target.value

          if (!validateEmail(value)) {
            setError('이메일 형식이 올바르지 않습니다.')
          } else {
            setError(null)
          }

          setName(value)
        }}
      />
      <input
        type="tel"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <textarea value={text} onChange={(event) => setText(event.target.value)} />
      <select value={fruit} onChange={(event) => setFruit(event.target.value)}>
        {selectableItems.map((item) => (
          <option key={item} value={item}>{item.toUpperCase()}</option>
        ))}
      </select>
      <button type="submit">확인</button>
    </form>
  )
}

export default Form
