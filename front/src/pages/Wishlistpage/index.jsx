import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlsitProvider'
import { Helmet } from 'react-helmet-async'

function Wishlistpage() {

    const {wishlist, handleWishlist} = useContext(WishlistContext)

  return (
    <section id='Wishlistpage'>
          <Helmet>
      <title>Wishlist Page</title>
    </Helmet>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {wishlist
          .map((x) => (
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.desc}</td>
              <td>
                <button onClick={() => handleWishlist(x)}>delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Wishlistpage