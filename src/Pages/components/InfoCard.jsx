import React from 'react'
import PropTypes from 'prop-types'

function InfoCard(props) {
  return (
    <div className='bg-emerald-100 p-10 rounded-lg text-teal-700 w-2/6 text-center'>
      <h1 className='text-6xl'>{props.num}</h1>
      <p className='text-sm'>{props.title}</p>
    </div>
  )
}

InfoCard.propTypes = {
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default InfoCard