import React from 'react'

const ContactTable = ({ rows }) => {
  return (
    <div className='flex flex-col  mt-2'>
      <h1 className="border-l-2 border-t-2 border-r-2 text-2xl font-semibold pl-2 border-black w-full">Contact Details</h1>
      <table className="w-full border-collapse border border-black">
        <tbody className='border-2 border-black'>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.label ? (
                <>
                  <td className="border border-gray-300 px-2 py-1 w-45">
                    {row.label}
                  </td>
                  <td
                    colSpan="3"
                    className="border border-gray-300 px-2 py-1"
                  >
                    {row.value}
                  </td>
                </>
              ) : (
                <>
                  <td className="border border-gray-300 px-2 py-1 w-45">
                    {row.leftLabel}
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    {row.leftValue}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 w-45">
                    {row.rightLabel}
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    {row.rightValue}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactTable
