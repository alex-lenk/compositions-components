import React, {useState} from "react"
import Counter from "./counter"

const CountersList = () => {
  const initialState = [
    {
      id: 0,
      value: 0,
      name: 'Не нужная вещь',
    },
    {
      id: 1,
      value: 1,
      name: 'Ложка',
    },
    {
      id: 2,
      value: 3,
      name: 'Вилка',
    },
    {
      id: 3,
      value: 4,
      name: 'Тарелка',
    },
    {
      id: 4,
      value: 1,
      name: 'Набор минималиста',
    },
  ]

  const [counters, setCounter] = useState(initialState)

  const handleDelete = (id) => {
    const newCounters = counters.filter(instance => instance.id !== id)
    setCounter(newCounters)
  }

  const handleReset = () => {
    setCounter(initialState)
    console.log('rest')
  }

  const handleIncrement = (id) => {
    const newState = counters.map(item => {
      if (item.id === id) {
        item.value += 1
      }
      return item
    })
    setCounter(newState)
  }

  const handleDecrement = (id) => {
    const newState = counters.map(item => {
      if (item.id === id && item.value !== 0) {
        item.value -= 1
      }
      return item
    })
    setCounter(newState)
  }

  return <>
    {counters.map(count =>
      <Counter key={count.id} {...count} onDecrement={handleDecrement} onIncrement={handleIncrement}
               onDelete={handleDelete}/>
    )}

    <button className="btn-primary btn m-2" onClick={handleReset}>Сброс</button>
  </>
}

export default CountersList
