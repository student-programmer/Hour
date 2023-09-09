import React from 'react'
import All from '../../components/All/All'
import all from '../../api/data4.json';
const Print = () => {
  return (
    <div>
        <All data={all}/>
    </div>
  )
}

export default Print