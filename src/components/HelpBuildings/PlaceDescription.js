import React from 'react'


const PlaceDescription = ({placeActive}) => {
  return (
    <div className='helpBuildings__box-description'>
     {placeActive.title}
    </div>
  )
}

export default PlaceDescription
