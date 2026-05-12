function SummaryTable({ rows }) {
  return (
    <div className='flex  flex-col gap-y-3 mt-2'>
      <div className="flex flex-col">
        <h1 className="border-l-2 border-t-2 border-r-2 text-2xl font-semibold pl-2 border-black w-full">Summary Table</h1>
        <table className="w-full border-collapse">
          <tbody className=" border-2 border-black">
            {rows.map((row, index) => (
              <tr
                key={index}
                className="break-inside-avoid"
              >
                <td
                  className="
                border border-[#cfcfcf]
                px-2 py-1
                w-22.5
                align-top
              "
                >
                  {row.code}
                </td>
                <td
                  className="
                border border-[#cfcfcf]
                px-2 py-1
              "
                >
                  <div className="flex justify-between h-full">

                    <div className="flex-1 pr-3">
                      {row.description}
                    </div>
                    {
                      row.condition && (
                        <div
                          className="
                        border-l border-[#cfcfcf]
                        pl-3
                        min-w-35
                        text-center
                      "
                        >
                          {row.condition}
                        </div>
                      )
                    }
                  </div>
                </td>

                <td
                  className="
                border border-[#cfcfcf]
                px-2 py-1
                w-42.5
                text-right
              "
                >
                  {row.value}
                </td>

                <td
                  className="
                border border-[#cfcfcf]
                px-2 py-1
                w-30
              "
                >
                  {row.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col border-2 border-black">
        <div className="border-b-2 border-b-black">
          <h1 className="text-2xl pl-1 font-semibold">Evaluation</h1>
        </div>
        <div>
          <p className="pl-1">Bellows element is equal or stronger than weld ends/pipe ends against vacuum.</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryTable;