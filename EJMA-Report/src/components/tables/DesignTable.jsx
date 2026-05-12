function DesignTable({ rows }) {
  return (
    <div className='flex flex-col mt-2'>
      <h1 className="border-l-2 border-t-2 border-r-2 text-2xl font-semibold pl-2 border-black w-full">Design Table</h1>
      <table className="w-full border-collapse">
        <tbody className="border-2 border-black">
          {rows.map((row, index) => (
            <tr
              key={index}
              className=""
            >
              <td className="border border-[#cfcfcf] px-2 py-1 w-[320px] ">
                {row.left.label}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-7.5 text-center ">
                {row.left.symbol}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-17.5 text-right ">
                {row.left.value}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-15 ">
                {row.left.unit}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-62.5 ">
                {row.right.label}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-15 text-center ">
                {row.right.symbol}
              </td>

              <td className="border border-[#cfcfcf] px-2 py-1 w-17.5 text-right ">
                {row.right.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DesignTable;