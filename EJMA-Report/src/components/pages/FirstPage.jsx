import React from 'react'
import { reportData } from '../../../reportData'
import ContactTable from '../tables/ContactTable'
import DesignTable from '../tables/DesignTable'
import ThermalTable from '../tables/ThermalTable'
import DimentionTable from '../tables/DimentionTable'
import MaterialTable from '../tables/MaterialTable'
import Header from '../Header'
import { useNavigate } from 'react-router-dom'

function FirstPage() {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col '>
      <Header />
      <div className='mx-10'>
        <ContactTable rows={reportData.contactDetails} />
        <DesignTable rows={reportData.designParameters} />
        <ThermalTable rows={reportData.thermalMovement} />
        <DimentionTable rows={reportData.dimensions} />
        <MaterialTable rows={reportData.material} />
      </div>
      <button onClick={()=>navigate('/next')} className='p-2 rounded-2xl self-end mt-4 mr-5 cursor-pointer font-bold bg-orange-600'>Next page</button>
    </div>
  )
}

export default FirstPage