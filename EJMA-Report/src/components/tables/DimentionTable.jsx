import React from 'react'

const DimentionTable = ({ rows }) => {
  return (
    <div className='flex flex-col mt-2'>
      <h1 className="border-l-2 border-t-2 border-r-2 text-2xl font-semibold pl-2 border-black w-full">Dimention Table</h1>
      <table className="w-full border-collapse">
        <tbody className='border-2 border-black'>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="break-inside-avoid"
            >

              <td className="border border-[#cfcfcf] px-2 py-1 w-60">
                {row.leftLabel}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-10 text-center">
                {row.leftSymbol}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-20 text-right">
                {row.leftValue}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-15">
                {row.leftUnit}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-60">
                {row.rightLabel}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-10 text-center">
                {row.rightSymbol}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-20 text-right">
                {row.rightValue}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-15">
                {row.rightUnit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DimentionTable
