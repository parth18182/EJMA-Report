import React from 'react'
import { useNavigate } from 'react-router-dom'
import { reportData } from '../../../reportData'
import Header from '../Header'
import SummaryTable from '../tables/SummaryTable'

const SecondPage = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col '>
      <Header />
      <div className='mx-10'>
        <SummaryTable rows={reportData.summary} />
      </div>
      <button onClick={() => navigate('/')} className='p-2 rounded-2xl self-end mt-4 mr-5 cursor-pointer font-bold bg-orange-600'>Previous page</button>
    </div>
  )
}

export default SecondPage
