import React from 'react'

const MaterialTable = ({ rows }) => {
  return (
    <div className='flex flex-col mt-2'>
      <h1 className="border-l-2 border-t-2 border-r-2 text-2xl font-semibold pl-2 border-black w-full">Material Table</h1>
      <table className="w-full border-collapse">
        <tbody className='border-2 border-black'>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="break-inside-avoid"
            >
              <td className="border border-[#cfcfcf] px-2 py-1 w-62.5">
                {row.leftLabel}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1">
                {row.leftValue}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-62.5">
                {row.rightLabel}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1">
                {row.rightValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MaterialTable
