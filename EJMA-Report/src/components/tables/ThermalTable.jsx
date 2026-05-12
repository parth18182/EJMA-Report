import React from 'react'

const ThermalTable = ({ rows }) => {
  return (
    <div className='flex flex-col mt-2'>
      <h1 className="border-l-2 border-t-2 border-r-2 text-2xl font-semibold pl-2 border-black w-full">Thermal Table</h1>
      <table className="w-full border-collapse">
        <thead className='border-l-2 border-t-2 border-r-2 border-black'>
          <tr>
            <th className="border border-[#cfcfcf] px-2 py-1">
            </th>

            <th className="border border-[#cfcfcf] px-2 py-1">
            </th>

            <th
              colSpan="2"
              className="border border-[#cfcfcf] px-2 py-1"
            >
              Condition 1
            </th>

            <th
              colSpan="2"
              className="border border-[#cfcfcf] px-2 py-1"
            >
              Condition 2
            </th>

            <th className="border border-[#cfcfcf] px-2 py-1">
            </th>
          </tr>
        </thead>

        <tbody className='border-b-2 border-l-2 border-r-2 border-black'>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="break-inside-avoid"
            >
              <td className="border border-[#cfcfcf] px-2 py-1 w-62.5">
                {row.label}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-10 text-center">
                {row.axis}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-20 text-right">
                {row.condition1.value}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-30">
                {row.condition1.type}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-20 text-right">
                {row.condition2.value}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-30">
                {row.condition2.type}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-17.5">
                {row.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ThermalTable
