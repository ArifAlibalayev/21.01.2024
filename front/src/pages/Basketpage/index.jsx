import React, { useContext } from 'react'
import { BasketContext } from '../../context/BaskerProvider'
import { Helmet } from 'react-helmet-async'

function Basketpage() {
  const {basket, deleteFromBasket , increaseCount, decreaseCount} = useContext(BasketContext)

  return (
    <section id='Basketpage'>
          <Helmet>
      <title>Basket Page</title>
    </Helmet>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Operations</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {basket
          .map((x) => (
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.desc}</td>
              <td>
                <button onClick={() => deleteFromBasket(x)}>delete</button>
              </td>
              <td>
                <button onClick={()=>decreaseCount(x)}>-</button>
                <h4>{x.count}</h4>
                <button onClick={()=>increaseCount(x)}>+</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Basketpage