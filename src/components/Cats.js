import { Component } from 'react'

const cats = [
  {
    id: 1,
    name: '휴지',
    breed: 'Korean Shorthair',
  },
  {
    id: 2,
    name: '너구리',
    breed: 'Korean Shorthair',
  },
  {
    id: 3,
    name: '돌맹이',
    breed: 'Korean Shorthair',
  },
  {
    id: 1,
    name: '휴지',
    breed: 'Korean Shorthair',
  },
  {
    id: 2,
    name: '너구리',
    breed: 'Korean Shorthair',
  },
  {
    id: 3,
    name: '돌맹이',
    breed: 'Korean Shorthair',
  },
  {
    id: 1,
    name: '휴지',
    breed: 'Korean Shorthair',
  },
  {
    id: 2,
    name: '너구리',
    breed: 'Korean Shorthair',
  },
  {
    id: 3,
    name: '돌맹이',
    breed: 'Korean Shorthair',
  },
]

class Cats extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        {cats.map(cat => (
          <li>
            Name: <span>{cat.name}</span>
            Breed: <span>{cat.breed}</span>
          </li>
        ))}
      </ul>
    )
  }
}

export default Cats
