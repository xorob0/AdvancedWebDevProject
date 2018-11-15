import React from 'react'

const Vet = ({lastname,firstname,speciality}) => {
  return (
      <tr>
        <td>{lastname + ' ' + firstname}</td>
        <td>{speciality}</td>
      </tr>
  )
}

export default Vet