import React from 'react'
import PropTypes from 'prop-types'

function InfoDinero(props) {
  return (
    <div className='bg-teal-700 p-10 rounded-lg text-emerald-50 w-3/6 text-center'>
      <h1 className='text-6xl'>${props.num}</h1>
      <p className='text-sm'>{props.title}</p>
    </div>
  )
}

InfoDinero.propTypes = {
  num: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default InfoDinero