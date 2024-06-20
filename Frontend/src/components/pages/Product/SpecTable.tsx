function SpecTable({ specifications }) {
  return (
    <ul className='max-h-96 overflow-y-scroll '>
      {specifications.map((spec, index) => (
        <li key={index} className='my-4'>
          <h4 className='text-2xl py-3'>{spec.title}</h4>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <tbody>
                {spec.spec_row_list.map((spec_row, rowIndex) => (
                  <tr key={rowIndex} className='border-t'>
                    <td className='border px-4 py-2'>{spec_row.spec_title}</td>
                    <td className='border px-4 py-2'>{spec_row.spec_body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SpecTable;
