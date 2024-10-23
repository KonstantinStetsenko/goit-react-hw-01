export default function transactions({items}) {
return (<table>
  <thead>
    <tr className="titleTable">
      <th className="titleType">Type</th>
      <th className="title">Amount</th>
      <th className="title">Currency</th>
    </tr>
  </thead>
    <tbody>
        {
            items.map((item)=>{
                return<tr className="list"key={item.id}>
            <td className="tableDataType">{item.type}</td>
                    <td className="tableData">{item.amount}</td>
                    <td className="tableData">{item.currency}</td>
    </tr>})
   
            }
   
  </tbody>
</table>)
}