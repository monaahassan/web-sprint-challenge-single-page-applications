import React from 'react'

function pizza({ details }) {
  if (!details) {
    return <h3>Build Your Own Pizza</h3>
  }

  return (
    <div className='friend container'>
      <p>Size: {details.size}</p>
      <p>Sauce: {details.sauce}</p>
      {
        !!details.Toppings && !!details.Toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.Toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
      <p>GlutenFree: {details.glutenFree}</p>
      <p>Special: {details.special}</p>

     
    </div>
  )
}

export default Pizza
