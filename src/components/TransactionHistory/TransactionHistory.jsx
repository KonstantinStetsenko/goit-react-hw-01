import React from 'react';
import css from "./TransactionHistory.module.css"
import clsx from "clsx";
export default function transactions({ items }) {
return (<table>
  <thead>
    <tr className={clsx(css.titleTable)}>
      <th className={clsx(css.titleType)}>Type</th>
      <th className={clsx(css.title)}>Amount</th>
      <th className={clsx(css.title)}>Currency</th>
    </tr>
  </thead>
    <tbody>
        {
            items.map((item)=>{
              return <tr className={ clsx(css.list)} key={item.id}>
            <td className={clsx(css.tableDataType)}>{item.type}</td>
                    <td className={clsx(css.tableData)}>{item.amount}</td>
                    <td className={clsx(css.tableData)}>{item.currency}</td>
    </tr>})
   
            }
   
  </tbody>
</table>)
}